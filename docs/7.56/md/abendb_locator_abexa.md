  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Streaming and Locators](javascript:call_link\('abenstreams_locators.htm'\)) →  [ABAP SQL - Examples of LOB Handles](javascript:call_link\('abenlobs_abexas.htm'\)) → 

ABAP SQL - Locator, Access to Column Content

This example demonstrates how to access texts in DDIC database tables using [locators](javascript:call_link\('abenlocator_glosry.htm'\) "Glossary Entry").

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
          length += otr\_text\_locator->get\_length( ).
          IF otr\_text\_locator->find( start\_offset = 0
                                     pattern      = pattern ) <> -1.
            hits += 1.
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

In this example, a SELECT loop and locators [created](javascript:call_link\('abenselect_into_lob_handles.htm'\)) there are used to access the text column of a DDIC database table in which texts from Online Text Repository (OTR) are stored in a column of the type STRING.

The methods of the locators make it possible to get information about the texts without them having to be transported into the ABAP program. In this example, the average length of all texts of a language is determined and the number of texts which contain a specific character string is returned.

Since the number of locators in each [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") is limited, the locator created there must be closed explicitly at the end of each SELECT loop. The runtime error DBIF\_RSQL\_TOO\_MANY\_LOB\_HANDLES occurs if the maximum number of open locators is exceeded.