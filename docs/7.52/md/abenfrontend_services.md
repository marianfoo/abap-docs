---
title: "Access to the Presentation Server"
description: |
  Programs that are executed in dialog(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_processing_glosry.htm 'Glossary Entry') and from SAP GUI can use the methods of the class CL_GUI_FRONTEND_SERVICES to access the current presentation server(https://help.sap.com/doc/abap
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfrontend_services.htm"
abapFile: "abenfrontend_services.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenfrontend", "services"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) → 

Access to the Presentation Server

Programs that are executed in [dialog](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_processing_glosry.htm "Glossary Entry") and from SAP GUI can use the methods of the class CL\_GUI\_FRONTEND\_SERVICES to access the current [presentation server](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpresentation_server_glosry.htm "Glossary Entry").

They can use

-   the methods GUI\_UPLOAD and GUI\_DOWNLOAD to read and write to files,

-   the methods FILE\_... to scan and edit files,

-   the methods DIRECTORY\_... to scan and edit directories,

-   the method EXECUTE to execute [operating system statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_system_commands_pres.htm).

The function module GUI\_IS\_AVAILABLE can be used in advance to determine whether a SAP GUI is available.

Note

The methods of the class CL\_GUI\_FRONTEND\_SERVICES replace older function modules with similar functions, such as GUI\_UPLOAD, GUI\_DOWNLOAD, WS\_UPLOAD, or WS\_DOWNLOAD.

Example

Writes to and reads a file on a presentation server with the operating system MS Windows. The directory is created on request. The SAP GUI availability prompt prevents runtime errors if the programs does not run in [dialog processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_processing_glosry.htm "Glossary Entry").

DATA gui TYPE c LENGTH 1.
CALL FUNCTION 'GUI\_IS\_AVAILABLE'
  IMPORTING
    return = gui.
IF gui IS INITIAL.
  RETURN.
ENDIF.
DATA(dir)  = \`C:\\temp\\my\_temp\\\`.
DATA(name) = \`myfile.dat\`.
IF cl\_gui\_frontend\_services=>directory\_exist( dir )  = abap\_false.
  DATA rc TYPE i.
  cl\_gui\_frontend\_services=>directory\_create(
    EXPORTING
      directory = dir
    CHANGING
      rc        = rc
    EXCEPTIONS
      OTHERS = 4 ).
  IF sy-subrc <> 0 OR
     rc       <> 0 OR
     cl\_gui\_frontend\_services=>directory\_exist( dir ) = abap\_false.
    MESSAGE 'Directory could not be created' TYPE 'I' DISPLAY LIKE 'E'.
    RETURN.
  ENDIF.
ENDIF.
DATA(file) = dir && name.
IF cl\_gui\_frontend\_services=>file\_exist( file ) = abap\_true.
  DATA ans TYPE c LENGTH 1.
  CALL FUNCTION 'POPUP\_TO\_CONFIRM'
    EXPORTING
      text\_question = 'Overwrite existing file?'
      text\_button\_1 = 'Yes'
      text\_button\_2 = 'No'
    IMPORTING
      answer        = ans.
ENDIF.
TYPES data\_line TYPE x LENGTH 255.
DATA  data\_tab  TYPE STANDARD TABLE OF data\_line WITH EMPTY KEY.
CALL TRANSFORMATION id SOURCE text = \`Test data\`
                       RESULT XML data\_tab.
IF ans <> 2.
  cl\_gui\_frontend\_services=>gui\_download(
    EXPORTING
      filename = file
      filetype = 'BIN'
    CHANGING
      data\_tab = data\_tab
    EXCEPTIONS
      OTHERS = 4 ).
  IF sy-subrc <> 0.
    MESSAGE 'File could not be written' TYPE 'I' DISPLAY LIKE 'E'.
    RETURN.
  ENDIF.
ENDIF.
...
CLEAR data\_tab.
cl\_gui\_frontend\_services=>gui\_upload(
  EXPORTING
    filename = file
    filetype = 'BIN'
  CHANGING
    data\_tab = data\_tab
  EXCEPTIONS
    OTHERS = 4 ).
IF sy-subrc <> 0.
  MESSAGE 'File could not be read' TYPE 'I' DISPLAY LIKE 'E'.
  RETURN.
ENDIF.