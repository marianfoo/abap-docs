  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Extracts](javascript:call_link\('abenabap_extracts_extended.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXTRACT%2C%20ABAPEXTRACT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EXTRACT

[Short Reference](javascript:call_link\('abapextract_shortref.htm'\))

Obsolete Syntax

EXTRACT *\[* header *|* field\_group *\]*.

Effect

This statement appends the current content of the fields that were previously included with the statement [INSERT](javascript:call_link\('abapinsert_fg.htm'\)) in the field group header or field\_group to the [extract dataset](javascript:call_link\('abenextract_dataset_glosry.htm'\) "Glossary Entry") of the program. If no field group is specified after EXTRACT, the field group header is added implicitly.

The extract dataset is created the first time the EXTRACT statement of a program is executed and the first row is added. Once an EXTRACT statement is executed, no other fields can be included in the specified field group field\_group using INSERT. Otherwise, an uncatchable exception is raised by the next EXTRACT statement for the same field group.

Fields of the types [s](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), [i](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), and [int8](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) with the minimum value -32768, -2147483648, or -9223372036854775808 are set to the value 0 when extracted to the field group header.

Hints

-   The field group header is the initial part and sort key of every field group, which means that no more fields can be included in header after EXTRACT is executed for the first time.
-   The rows of an extract dataset cannot be deleted explicitly and are persisted for as long as the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the program.
-   In global classes, no field groups can be defined or processed. In methods of local classes of programs other than class pools, the statement EXTRACT is possible for globally defined field groups.
-   Extracts are obsolete. [Internal tables](javascript:call_link\('abenitab.htm'\)) should be used instead.

Example

This example continues the example under [INSERT](javascript:call_link\('abapinsert_fg.htm'\)). The fields of the field groups flight\_info and flight\_date are filled in a nested LOOP and appended to the extract dataset.

REPORT ...
DATA: spfli\_wa    TYPE spfli,
      sflight\_wa  TYPE sflight,
      spfli\_tab   LIKE TABLE OF spfli\_wa,
      sflight\_tab LIKE TABLE OF sflight\_wa.
FIELD-GROUPS: header, flight\_info, flight\_date.
START-OF-SELECTION.
  INSERT: spfli\_wa-carrid spfli\_wa-connid sflight\_wa-fldate
            INTO header,
          spfli\_wa-cityfrom spfli\_wa-cityto
            INTO flight\_info.
  SELECT \*
         FROM spfli
         INTO TABLE @spfli\_tab.
  SELECT \*
         FROM sflight
         INTO TABLE @sflight\_tab.
  LOOP AT spfli\_tab INTO spfli\_wa.
    sflight\_wa-fldate = '--------'.
    EXTRACT flight\_info.
    LOOP AT sflight\_tab INTO sflight\_wa
            WHERE carrid = spfli\_wa-carrid AND
                  connid = spfli\_wa-connid.
      EXTRACT flight\_date.
    ENDLOOP.
  ENDLOOP.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: EXTRACT after SORT or LOOP.
    Runtime error: EXTRACT\_AFTER\_SORT/LOOP
-   Cause: Not enough roll memory to create the extracts.
    Runtime error: EXTRACT\_BUFFER\_NO\_ROLL
    Runtime error: EXTRACT\_NO\_ROLL\_OLD\_KEY
-   Cause: Too much length of a single field is occupied.
    Runtime error: EXTRACT\_FIELD\_TOO\_LARGE
-   Cause: Problems when creating the extract dataset master file.
    Runtime error: EXTRACT\_FILE\_PTR\_NOT\_EMPTY
    Runtime error: EXTRACT\_INIT\_DIR\_EXTRACT
    Runtime error: EXTRACT\_INIT\_FILEMASK\_INVALID
    Runtime error: EXTRACT\_INIT\_FILEMASK\_TOO\_LARG
    Runtime error: EXTRACT\_INIT\_FN\_EXTRACT
-   Cause: The field group HEADER was modified after EXTRACT was used to extract records.
    Runtime error: EXTRACT\_HEADER\_NOT\_UNIQUE
-   Cause: Local data is not allowed in field groups.
    Runtime error: EXTRACT\_INSERT\_LOCAL\_DATA
-   Cause: Error when opening the external dataset file.
    Runtime error: EXTRACT\_OPEN\_EXTRACTFILE\_OPEN
-   Cause: Total data length of a record to be extracted (including HEADER fields) is too big.
    Runtime error: EXTRACT\_TOO\_LARGE