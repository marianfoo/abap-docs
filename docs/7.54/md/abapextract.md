---
title: "EXTRACT"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapextract_shortref.htm) Obsolete Syntax EXTRACT  header  field_group . Effect This statement appends the current content of the fields previously included in the field group header or field_group using the st
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapextract.htm"
abapFile: "abapextract.htm"
keywords: ["select", "insert", "delete", "loop", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abapextract"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_internal_obsolete.htm) →  [Obsolete Extracts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_extracts_extended.htm) → 

EXTRACT

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapextract_shortref.htm)

Obsolete Syntax

EXTRACT *\[* header *|* field\_group *\]*.

Effect

This statement appends the current content of the fields previously included in the field group header or field\_group using the statement [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_fg.htm) to the [extract dataset](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenextract_dataset_glosry.htm "Glossary Entry") of the program. If there is no field group specified after EXTRACT, the field group header is added implicitly.

The extract dataset is created the first time EXTRACT is executed and the first row added. Once an EXTRACT statement is executed, no other fields can be included in the specified field group field\_group using INSERT. If not, a non-handleable exception is raised by the next EXTRACT statement for the same field group.

Fields of the types [s](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_numeric.htm), [i](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_numeric.htm), and [int8](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_numeric.htm) with the minimum value -32768, -2147483648, or -9223372036854775808 respectively are set to the value 0 when extracted to the field group header.

Notes

-   The field group header is the initial part and sort key of every field group, which means that no more fields can be included in header after EXTRACT is executed for the first time.
    
-   The rows of an extract dataset cannot be deleted explicitly and are persisted as long as the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the program.
    
-   In global classes, no field groups can be defined or edited. In methods of local classes of programs other than class pools, the statement EXTRACT is possible for globally defined field groups.
    
-   Extracts are obsolete. [Internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) are recommended instead.
    

Example

This example continues the example under [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_fg.htm). The fields of the field groups flight\_info and flight\_date are filled in a nested LOOP and appended to the extract dataset.

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
    sflight\_wa-fldate ='--------'.
    EXTRACT flight\_info.
    LOOP AT sflight\_tab INTO sflight\_wa
            WHERE carrid = spfli\_wa-carrid AND
                  connid = spfli\_wa-connid.
      EXTRACT flight\_date.
    ENDLOOP.
  ENDLOOP.

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

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