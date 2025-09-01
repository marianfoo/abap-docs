# ABAP - Keyword Documentation / ABAP - Programming Language / Data Interfaces and Communication Interfaces / Access to the Presentation Server

Included pages: 2


### abenfrontend_services.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Access%20to%20the%20Presentation%20Server%2C%20ABENFRONTEND_SERVICES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Access to the Presentation Server

Programs that are executed in [dialog](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendialog_processing_glosry.htm "Glossary Entry") and from SAP GUI can use the methods of the class CL\_GUI\_FRONTEND\_SERVICES to access the current [presentation server](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpresentation_server_glosry.htm "Glossary Entry").

They can use

-   the methods GUI\_UPLOAD and GUI\_DOWNLOAD to read and write to files,
-   the methods FILE\_... to examine and process files,
-   the methods DIRECTORY\_... to examine and process directories,
-   the method EXECUTE to execute [operating system statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_system_commands_pres.htm).

The function module GUI\_IS\_AVAILABLE can be used in advance to determine whether a SAP GUI is available.

Hint

The methods of the class CL\_GUI\_FRONTEND\_SERVICES replace older function modules with similar functions, such as GUI\_UPLOAD, GUI\_DOWNLOAD, WS\_UPLOAD, or WS\_DOWNLOAD.

Example

Writes to and reads a file on a presentation server with the operating system MS Windows. The directory is created on request. The SAP GUI availability query prevents runtime errors if the programs are not executed in [dialog processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendialog_processing_glosry.htm "Glossary Entry").

DATA gui TYPE c LENGTH 1.
CALL FUNCTION 'GUI\_IS\_AVAILABLE'
  IMPORTING
    return = gui.
IF gui IS INITIAL.
  RETURN.
ENDIF.
FINAL(dir)  = \`C:\\temp\\my\_temp\\\`.
FINAL(name) = \`myfile.dat\`.
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
FINAL(file) = dir && name.
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

Executable Example

[Uploading an Excel File](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexcel_to_itab_abexa.htm)

Continue
![Example](exa.gif "Example") [Uploading an Excel File](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexcel_to_itab_abexa.htm)


### abenexcel_to_itab_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [Access to the Presentation Server](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfrontend_services.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Uploading%20an%20Excel%20File%2C%20ABENEXCEL_TO_ITAB_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Uploading an Excel File

This example loads an Excel file from the presentation server and converts it into an internal table.

Source Code   

\* Public class definition
CLASS cl\_demo\_read\_excel\_to\_itab DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
      REDEFINITION .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_read\_excel\_to\_itab IMPLEMENTATION.
  METHOD main.
    DATA gui TYPE c LENGTH 1.
    CALL FUNCTION 'GUI\_IS\_AVAILABLE'
      IMPORTING
        return = gui.
    IF gui IS INITIAL.
      RETURN.
    ENDIF.
    DATA(file\_name) = \`... .xlsx\`.
    cl\_demo\_input=>new(
      )->request( CHANGING field = file\_name ).
    TYPES data\_line TYPE x LENGTH 255.
    DATA  data\_tab  TYPE STANDARD TABLE OF data\_line WITH EMPTY KEY.
    CLEAR data\_tab.
    cl\_gui\_frontend\_services=>gui\_upload(
      EXPORTING
        filename = file\_name
        filetype = 'BIN'
      CHANGING
        data\_tab = data\_tab
      EXCEPTIONS
        OTHERS = 4 ).
    IF sy-subrc <> 0.
      out->write( 'File could not be read' ).
      RETURN.
    ENDIF.
    DATA data\_string TYPE xstring.
    CONCATENATE LINES OF data\_tab INTO data\_string IN BYTE MODE.
    TRY.
        FINAL(xls) = CAST if\_fdt\_doc\_spreadsheet(
          NEW cl\_fdt\_xl\_spreadsheet( document\_name = file\_name
                                     xdocument     = data\_string ) ).
      CATCH cx\_fdt\_excel\_core.
        out->write( 'XLS object not created' ).
        RETURN.
    ENDTRY.
    xls->get\_worksheet\_names(
      IMPORTING
        worksheet\_names = FINAL(sheets) ).
    LOOP AT sheets INTO FINAL(sheet).
      FINAL(data\_ref) =
        xls->get\_itab\_from\_worksheet( sheet ).
      out->next\_section( sheet ).
      out->write( data\_ref->\* ).
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.

Description   

After loading a file with GUI\_UPLOAD of CL\_GUI\_FRONTEND\_SERVICES it is tried to handle it as an Excel file and to convert it into an internal table.
