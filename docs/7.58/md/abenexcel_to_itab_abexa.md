---
title: "Uploading an Excel File"
description: |
  This example loads an Excel file from the presentation server and converts it into an internal table. Source Code  Public class definition CLASS cl_demo_read_excel_to_itab DEFINITION PUBLIC INHERITING FROM cl_demo_classrun CREATE PUBLIC . PUBLIC SECTION. METHODS main REDEFINITION . ENDCLASS
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexcel_to_itab_abexa.htm"
abapFile: "abenexcel_to_itab_abexa.htm"
keywords: ["loop", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "abenexcel", "itab", "abexa"]
---

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