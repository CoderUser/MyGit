window.TApi.repair = (function(_TApi)
{
	var _repair = _TApi.repair || {};
	VNavigatorBar.updateTitle("${languageMap.ToRepair}");
	var _suggestNo = _TApi.$id("repair-docno"),
		_locCode = _TApi.$id("repair-loccode"),
		_floor = _TApi.$id("repair-floor"),
		_telephone = _TApi.$id("repair-tel"),
		_reqRemark = _TApi.$id("repair-reqremark"),
		_caseDesc = _TApi.$id("repair-casedesc"),
		_buttonDel = _TApi.$id("btn-del"),
		_buttonConfirm = _TApi.$id("btn-confirm"),
		FileImg = _TApi.$id("file-img"),
		ImgPrew = _TApi.$id("img_prew"),
		_isNew = "${isNew}" == 1,
		_fileList = [],
		_removedList = [];

	if (_isNew)
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
		if (!_locCode.value)
		{
			_TApi.Toast.show("${languageMap.LocCodeRequire}");
			return false;
		}
		return true;
	}

	function uploadImage(docNo, allSuccess)
	{
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
				callback: function(options, success)
				{
					if (success) checkAllsuccess();
				}
			};
			TAjax.uploadBinary(PosServicePath.MOBILETENANT_FN_UPLOADREPAIRIMG + "/" + _TApi.tenant.getMallOrgId() + "/" + docNo + "/" + _fileList[index].fileName, binaryData, requestOption);
		}
	}

	function deleteRepair()
	{
		TAjax.request({
			path: PosServicePath.MOBILETENANT_FN_DELREPAIR,
			params: {
				mallOrgId: _TApi.tenant.getMallOrgId(),
				docNo: _suggestNo.textContent
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

	function submitRepair(success)
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
			mallOrgId: _TApi.tenant.getMallOrgId(),
			orgPrefix: _TApi.tenant.getOrgPrefix(),
			tenantOrgId: _TApi.tenant.getOrgId(),
			staffcode: _TApi.tenant.getLocalUser(),
			locCode: _locCode.value,
			floorOrg: _floor.value,
			telephone: _telephone.value,
			reqRemark: _reqRemark.value,
			caseDesc: _caseDesc.value,
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
			requestParams.docNo = _suggestNo.textContent;
			requestParams.imgRemoved = _removedList;
		}
		// do request
		TAjax.request({
			path: PosServicePath.MOBILETENANT_FN_REPAIRREQ,
			params: requestParams,
			success: function(resp)
			{
				var respObj = JSON.parse(resp.responseText);
				switch (respObj.errorCode)
				{
					case 0:
						if (success) success(respObj.docNo);
						break;
					default:
						_TApi.Toast.show(respObj.errorMessage);
				}
			}
		});
	}

	if (_buttonDel)
	{
		_buttonDel.onclick = function()
		{
			deleteRepair();
		};
	}

	_buttonConfirm.onclick = function()
	{
		if (!checkInput()) return;

		submitRepair(function(docNo)
		{
			uploadImage(docNo, function()
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
	_repair.updateFileListFromServer = function(fileList)
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

	return _repair;
})(window.TApi);