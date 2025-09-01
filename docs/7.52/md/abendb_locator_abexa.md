  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreams_locators.htm) →  [Open SQL - Examples forLOB Handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlobs_abexas.htm) → 

Locator, Access to Column Content

The example demonstrates how to access texts in the database by using [locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocator_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_db\_locator.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: otr\_text\_locator TYPE REF TO cl\_abap\_db\_c\_locator,
          length           TYPE i,
          hits             TYPE i,
          avg              TYPE p DECIMALS 2.
    DATA: pattern  TYPE string VALUE 'ABAP',
          language TYPE sy-langu.
    language = sy-langu.
    cl\_demo\_input=>add\_field( CHANGING field = pattern ).
    cl\_demo\_input=>request(   CHANGING field = language ).
    TRY.
        SELECT text
               FROM sotr\_textu
               WHERE langu = @language
               INTO @otr\_text\_locator.
          length = length + otr\_text\_locator->get\_length( ).
          IF otr\_text\_locator->find( start\_offset = 0
                                     pattern      = pattern ) <> -1.
            hits = hits + 1.
          ENDIF.
          otr\_text\_locator->close( ).
        ENDSELECT.
      CATCH cx\_lob\_sql\_error.
        WRITE 'Exception in locator' COLOR = 6.
        RETURN.
    ENDTRY.
    avg = length / sy-dbcnt.
    cl\_demo\_output=>display(
      |Average length of strings in database table: { avg }\\n\\n| &&
      |Occurrences of "{ pattern WIDTH = strlen( pattern ) }" | &&
      |in strings of database table: { hits }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In this example, the text column of a database table in which texts from the Online Text Repository (OTR) are stored in a column of the type STRING, is accessed in a SELECT loop using [](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_into_lob_handles.htm)locators which were created there.

The methods of the locators allow you to get information about the texts without them having to be transported into the ABAP program. In the example, the average length of all texts of a language is determined and the number of texts which contain a specific character string is returned.

Since the number of locators in each [database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry") is limited, the locator created there must be closed explicitly at the end of each SELECT loop. The runtime error DBIF\_RSQL\_TOO\_MANY\_LOB\_HANDLES occurs if the maximum number of open locators is exceeded.