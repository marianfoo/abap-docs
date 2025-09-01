  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Streaming and Locators](javascript:call_link\('abenstreams_locators.htm'\)) →  [ABAP SQL - Examples of LOB Handles](javascript:call_link\('abenlobs_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Reader%20Stream%2C%20Read%20Database%20Table%2C%20ABENDB_READER_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

ABAP SQL - Reader Stream, Read Database Table

This example demonstrates how data can be read from a DDIC database table using a [reader stream](javascript:call_link\('abenreader_stream_glosry.htm'\) "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_db\_reader DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    TYPES:
      pict\_line TYPE x LENGTH 1022,
      pict\_tab  TYPE STANDARD TABLE OF pict\_line WITH EMPTY KEY.
    DATA:
      name TYPE c LENGTH 255
           VALUE '/SAP/PUBLIC/BC/ABAP/mime\_demo/ABAP\_Docu\_Logo.gif',
      pict TYPE pict\_tab.
    METHODS show\_picture.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_db\_reader IMPLEMENTATION.
  METHOD main.
    DATA reader TYPE REF TO cl\_abap\_db\_x\_reader.
    cl\_demo\_input=>new( )->request(
            CHANGING field = me->name ).
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
    show\_picture( ).
  ENDMETHOD.
  METHOD show\_picture.
    DATA ext\_data  TYPE cl\_abap\_browser=>load\_tab.
    FINAL(html\_str) = \`<html><body><img src="PICT.GIF" ></body></html>\`.
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

Description   

In the method main, a reference variable reader is declared for a reader stream. This reader stream is then [created](javascript:call_link\('abenselect_into_lob_handles.htm'\)) in a SELECT statement.

The internal table pict is then filled iteratively with binary data from the row found. If data previously written in the executable [writer stream example](javascript:call_link\('abendb_writer_abexa.htm'\)) is read, this is the data of a figure in the GIF format.

The auxiliary method show\_picture displays the figure in an HTML browser.