---
title: "ABAP SQL - Reader Stream, Read Database Table"
description: |
  This example demonstrates how data can be read from a DDIC database table using a reader stream(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreader_stream_glosry.htm 'Glossary Entry'). Source Code REPORT demo_db_reader. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main.
version: "7.55"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_reader_abexa.htm"
abapFile: "abendb_reader_abexa.htm"
keywords: ["select", "do", "while", "if", "try", "method", "class", "data", "types", "internal-table", "abendb", "reader", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstreams_locators.htm) →  [ABAP SQL - Examples of LOB Handles](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlobs_abexas.htm) → 

ABAP SQL - Reader Stream, Read Database Table

This example demonstrates how data can be read from a DDIC database table using a [reader stream](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreader_stream_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_db\_reader.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    TYPES:
      pict\_line TYPE x LENGTH 1022,
      pict\_tab  TYPE STANDARD TABLE OF pict\_line WITH EMPTY KEY.
    CLASS-DATA:
      name TYPE c LENGTH 255
           VALUE '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif',
      pict TYPE pict\_tab.
    CLASS-METHODS show\_picture.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA reader TYPE REF TO cl\_abap\_db\_x\_reader.
    cl\_demo\_input=>request( CHANGING field = demo=>name ).
    SELECT SINGLE picture
           FROM demo\_blob\_table
           WHERE name = @name
           INTO @reader.
    IF sy-subrc <> 0.
      MESSAGE 'Nothing found, run DEMO\_DB\_WRITER first!'
              TYPE 'S' DISPLAY LIKE 'E'.
      RETURN.
    ENDIF.
    pict = VALUE #( FOR j = 1 WHILE reader->data\_available( )
                    ( reader->read( 1022 ) ) ).
    reader->close( ).
    show\_picture( ).  ENDMETHOD.
  METHOD show\_picture.
    DATA ext\_data  TYPE cl\_abap\_browser=>load\_tab.
    DATA(html\_str) = \`<html><body><img src="PICT.GIF" ></body></html>\`.
    ext\_data = VALUE #(
      ( name = 'PICT.GIF' type = 'image' dref = REF #( pict ) ) ).
    cl\_abap\_browser=>show\_html(
      EXPORTING
        html\_string = html\_str
        format      = cl\_abap\_browser=>landscape
        size        = cl\_abap\_browser=>small
        data\_table  = ext\_data
        check\_html  = ' ' ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the method main, a reference variable reader is declared for a reader stream. This reader stream is then [created](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselect_into_lob_handles.htm) in a SELECT statement.

The internal table pict is then filled iteratively with binary data from the row found. If data previously written in the executable [writer stream example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendb_writer_abexa.htm) is read, this is the data of a figure in the GIF format.

The auxiliary method show\_picture displays the figure in an HTML browser.