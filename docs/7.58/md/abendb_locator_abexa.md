  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstreams_locators.htm) →  [ABAP SQL - Examples of LOB Handles](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlobs_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Locator%2C%20Access%20to%20Column%20Content%2C%20ABENDB_LOCATOR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

ABAP SQL - Locator, Access to Column Content

This example demonstrates how to access texts in DDIC database tables using [locators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocator_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_db\_locator DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_db\_locator IMPLEMENTATION.
  METHOD main.
    DATA: otr\_text\_locator TYPE REF TO cl\_abap\_db\_c\_locator,
          length           TYPE i,
          hits             TYPE i,
          avg              TYPE p DECIMALS 2.
    DATA: pattern  TYPE string VALUE 'ABAP',
          language TYPE sy-langu.
    language = sy-langu.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = pattern
     )->request(   CHANGING field = language ).
    TRY.
        SELECT text
               FROM sotr\_textu
               WHERE langu = @language
               INTO @otr\_text\_locator.
          length += otr\_text\_locator->get\_length( ).
          IF otr\_text\_locator->find( start\_offset = 0
                                     pattern      = pattern ) <> -1.
            hits += 1.
          ENDIF.
          otr\_text\_locator->close( ).
        ENDSELECT.
      CATCH cx\_lob\_sql\_error.
        out->write( 'Exception in locator' ).
        RETURN.
    ENDTRY.
    avg = length / sy-dbcnt.
    out->write(
      |Average length of strings in database table: { avg }\\n\\n| &&
      |Occurrences of "{ pattern WIDTH = strlen( pattern ) }" | &&
      |in strings of database table: { hits }| ).
  ENDMETHOD.
ENDCLASS.

Description   

In this example, a SELECT loop and locators [created](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselect_into_lob_handles.htm) there are used to access the text column of a DDIC database table in which texts from Online Text Repository (OTR) are stored in a column of the type STRING.

The methods of the locators make it possible to get information about the texts without them having to be transported into the ABAP class. In this example, the average length of all texts of a language is determined and the number of texts which contain a specific character string is returned.

Since the number of locators in each [database LUW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_luw_glosry.htm "Glossary Entry") is limited, the locator created there must be closed explicitly at the end of each SELECT loop. The runtime error DBIF\_RSQL\_TOO\_MANY\_LOB\_HANDLES occurs if the maximum number of open locators is exceeded.