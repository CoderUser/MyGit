window.TApi.suggest = (function(_TApi)
{
	var _suggest = _TApi.suggest || {};
	VNavigatorBar.updateTitle("${languageMap.Suggest}");
	var _form = _TApi.$id("form-suggest"),
		_suggestNo = _TApi.$id("text-suggestno"),
		_content = _TApi.$id("text-content"),
		_buttonDel = _TApi.$id("btn_del"),
		_buttonConfirm = _TApi.$id("btn_confirm"),
		_button = _TApi.$cls("round-btn"),
		FileImg = _TApi.$id("file-img"),
		ImgPrew = _TApi.$id("img_prew"),
		_isNew = "${isNew}" == 1,
		_fileList = [],
		_removedList = [];
	if (_button.length == 1)
	{
		_buttonConfirm.style.width = '88%';
		_buttonConfirm.style.float = 'none';
	}
	function getImgId(file)
	{
		return file.name + "_" + file.size + "_" + file.lastModified;
	}

	function getFileObjById(imgId)
	{
		var count = _fileList.length;
		for (var index = 0; index < count; ++index)
		{
			if (_fileList[index].imgId == imgId) return _fileList[index];
		}
		return null;
	}

	function updateFileList(file, binaryData)
	{
		var imgId = getImgId(file),
			fileObj = getFileObjById(imgId),
			objectUrl = _TApi.Image.createObjectUrl(file);
		if (fileObj)
		{
			fileObj.file = file;
			if (binaryData) fileObj.binaryData = binaryData;
			fileObj.objectUrl = objectUrl;
		}
		else
		{
			fileObj = {
				imgId: imgId,
				file: file,
				fileName: new Date().getTime() + "_" + file.size + "_" + Math.floor(Math.random() * 100000),
				binaryData: binaryData,
				objectUrl: objectUrl
			};
			_fileList.push(fileObj);
		}
		return fileObj;
	}

	function removeFileListByName(fileName)
	{
		var count = _fileList.length;
		for (var index = 0; index < count; ++index)
		{
			if (_fileList[index].fileName == fileName)
			{
				if (_removedList.indexOf(_fileList[index].fileName) < 0) _removedList.push(_fileList[index].fileName);
				_fileList.splice(index, 1);
				break;
			}
		}
	}

	function addImgPreview(fileObj)
	{
		var imgPreview = document.createElement("li");
		imgPreview.innerHTML = '<a><img src="' + fileObj.objectUrl + '"></a><i data-file="' + fileObj.fileName + '">x</i>';
		ImgPrew.insertBefore(imgPreview, ImgPrew.lastElementChild);
		// handle delete button
		var imgPrewDel = imgPreview.getElementsByTagName("i")[0];
		imgPrewDel.onclick = function(e)
		{
			var imgPreview = e.target.parentNode;
			var fileName = e.target.getAttribute("data-file");
			removeFileListByName(fileName);
			ImgPrew.removeChild(imgPreview);
		};
	}

	function checkInput()
	{
		/*if (!_suggestNo.value)
		{
			_TApi.Toast.show("[$SuggestNoInvalid$]");
			return false;
		}*/
		if (!_content.value)
		{
			_TApi.Toast.show("${lang_ContentInvalid}");
			return false;
		}
		return true;
	}

	function uploadImage(allSuccess)
	{
		/*var data = new FormData();
		data.append("suggestNo", "abc");
		data.append("mallOrgId", _TApi.tenant.getMallOrgId());
		data.append("tenantCode", _TApi.tenant.getTenantCode());
		var count = (_fileList ? _fileList.length : 0);
		for (var index = 0; index < count; ++index)
			data.append("images", _fileList[index]);
		TAjax.uploadForm("image/upload",
			data,
			function(resp)
			{
				console.log(resp);
			},
			function(e)
			{
				console.log(e);
			});*/
		var count = _fileList.length, successCount = 0, binaryData, contentType = _TApi.Image.getContentType(), requestOption;
		if (count == 0 && allSuccess) allSuccess();		// check no image select
		function checkAllsuccess()
		{
			++successCount;
			if (successCount == count && allSuccess) allSuccess();
		}

		for (var index = 0; index < count; ++index)
		{
			binaryData = _fileList[index].binaryData;
			if (!binaryData)
			{
				checkAllsuccess();
				continue;
			}
			requestOption = {
				contentType: contentType,
				retryCallback: function()
				{
					checkAllsuccess();
				},
				callback: function(options, success, resp)
				{
					if (success) checkAllsuccess();
				}
			};
			TAjax.uploadBinary("image/upload/suggest/" + _fileList[index].fileName, binaryData, requestOption);
		}
	}

	function deleteSuggest()
	{
		TAjax.request({
			path: PosServicePath.MOBILETENANT_FN_DELSUGGEST,
			params: {
				suggestNo: _suggestNo.value
			},
			success: function(resp)
			{
				var respObj = JSON.parse(resp.responseText);
				switch (respObj.errorCode)
				{
					case 0:
						_TApi.Toast.show("${languageMap.DeleteSuccess}");
						AppContext.goBack();
						break;
					default:
						_TApi.Toast.show(respObj.errorMessage);
				}
			}
		});
	}

	function submitComplaint(success)
	{
		// build image list
		var imgList = [];
		var count = _fileList.length;
		for (var index = 0; index < count; ++index)
		{
			imgList.push(_fileList[index].fileName);
		}
		// build request params
		var requestParams = {
			tenantCode: _TApi.tenant.getTenantCode(),
			content: _content.value,
			imgList: imgList
		};
		if (_isNew)
		{
			requestParams.isNew = 1;
			requestParams.mallOrgId = _TApi.tenant.getMallOrgId();
		}
		else
		{
			requestParams.isNew = 0;
			requestParams.suggestNo = _suggestNo.value;
			requestParams.imgRemoved = _removedList;
		}
		// do request
		TAjax.request({
			path: PosServicePath.MOBILETENANT_FN_SUGGEST,
			params: requestParams,
			success: function(resp)
			{
				var respObj = JSON.parse(resp.responseText);
				switch (respObj.errorCode)
				{
					case 0:
						if (success) success();
						break;
					case -1:
						_TApi.Toast.show("${languageMap.SuggestNoDuplicate}");
						break;
					default:
						_TApi.Toast.show(respObj.errorMessage);
				}
			}
		});
	}

	_form.onsubmit = function(e)
	{
		e.preventDefault();
		return false;
	};
	if (_buttonDel)
	{
		_buttonDel.onclick = function()
		{
			deleteSuggest();
		};
	}
	_buttonConfirm.onclick = function()
	{
		if (!checkInput()) return;
		uploadImage(function()
		{
			submitComplaint(function()
			{
				_TApi.Toast.show("${languageMap.UpdateSuccess}");
				AppContext.goBack();
			});
		});
	};
	FileImg.onchange = function()
	{
		var count = FileImg.files.length;
		if (count > -1)
		{
			var imgId, file, fileObj;
			for (var index = 0; index < count; ++index)
			{
				file = FileImg.files[index];
				imgId = getImgId(file);
				// check exist
				if (getFileObjById(imgId)) continue;
				// check max
				if (_fileList.length >= 5)
				{
					_TApi.Toast.show("${languageMap.UploadTooMuch}");
					break;
				}
				// compress image
				_TApi.Image.compressFile(file, function(base64, file)
				{
					var binaryData = _TApi.Image.base64ToBinary(base64);
					updateFileList(file, binaryData);
				});
				// add to file list
				fileObj = updateFileList(file);
				// add preview
				addImgPreview(fileObj);
			}
		}
		return true;
	};
	// export function
	_suggest.updateFileListFromServer = function(fileList)
	{
		var count = fileList.length, fileObj;
		for (var index = 0; index < count; ++index)
		{
			fileObj = {
				fileName: fileList[index].imgName,
				objectUrl: fileList[index].imgUrl
			};
			_fileList.push(fileObj);
			addImgPreview(fileObj);
		}
	};
	return _suggest;
})(window.TApi);