---
title: "UPDATE dbtab, set indicators"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_shortref.htm) Syntax ... INDICATORS NOT SET STRUCTURE set_ind  (indicator_syntax) ... Alternatives: 1. ... INDICATORS NOT SET STRUCTURE set_ind(#!ABAP_ALTERNATIVE_1@1@) 2. ... IND
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_set_indicator.htm"
abapFile: "abapupdate_set_indicator.htm"
keywords: ["select", "update", "do", "if", "case", "try", "class", "data", "types", "internal-table", "abapupdate", "set", "indicator"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Write Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_writing.htm) →  [UPDATE dbtab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate.htm) →  [UPDATE dbtab, source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_source.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20UPDATE%20dbtab%2C%20set%20indicators%2C%20ABAPUPDATE_SET_INDICATOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

UPDATE dbtab, set indicators

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_shortref.htm)

Syntax

... INDICATORS *{**\[*NOT*\]* SET STRUCTURE set\_ind*}*
             *|* (indicator\_syntax) ...

Alternatives:

[1\. ... INDICATORS *\[*NOT*\]* SET STRUCTURE set\_ind](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... INDICATORS (indicator\_syntax)](#!ABAP_ALTERNATIVE_2@2@)

Effect

The addition INDICATORS of the UPDATE FROM clause can be used to specify [set indicators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_indicator_glosry.htm "Glossary Entry") for a [work area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwork_area_glosry.htm "Glossary Entry") or an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry"). The purpose of set indicators is to indicate columns to be changed. UPDATE FROM without indicators overwrites all fields of a row but when set indicators are used, only the indicated fields are updated. The addition can be specified only after UPDATE FROM for structured work areas wa or internal tables itab with a structured row type. The source work area or source internal table must have a structure set\_ind as the last field with the same number of components as the DDIC database table to be updated, where each component serves as a set indicator for one row. There is a static variant and a dynamic variant.

Hint

[Set indicators](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_indicator_glosry.htm "Glossary Entry") enforce [strict mode from ABAP release 7.55](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_755.htm).

Alternative 1   

... INDICATORS *\[*NOT*\]* SET STRUCTURE set\_ind

Effect

The [set indicator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_indicator_glosry.htm "Glossary Entry") set\_ind indicates which fields of a database are to be updated by the UPDATE FROM clause. set\_ind must be included in the source work area or source internal table as the last field and it must contain one component for each column of the DDIC database table to be changed. All individual components of set\_ind must have either the data type c and length 1, or the data type x and length 1. The UPDATE FROM clause checks the content of set\_ind and updates only fields that are marked with X (data type c) or hexadecimal 1 (data type x). Fields that contain any other character or hexadecimal value are not updated.

When using the addition INDICATORS NOT SET, the reverse logic is applied: all fields are updated, except the ones marked with X (data type c) or hexadecimal 1 (data type x).

Key fields must always be included in the indicator structure. However, the set indicators do not have any effect on key fields.

Hints

-   Set indicators work for regular structures, as well as for [LOB handle structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry"). If the source work area or source internal table contains [LOB handle components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") that are not marked for update, the [LOBs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_glosry.htm "Glossary Entry") they refer to are not updated either. As without set indicators, [LOB handles](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_handle_glosry.htm "Glossary Entry") should always be closed, regardless of whether they were marked for update or not.
-   Work areas with set indicators can be defined with the addition [INDICATORS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_indicators.htm) of the [TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes.htm) statement.
-   The addition [BITFIELD](abapselect_indicators.htm#!ABAP_ALTERNATIVE_2@2@) that is possible for SELECT cannot be used for UPDATE.

Example

An internal table ind\_tab is defined as the source structure. When using the addition [INDICATORS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_indicators.htm) of the [TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes.htm) statement, it consists of the structure of the DDIC database table DEMO\_UPDATE as well as the [indicator structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenindicator_structure_glosry.htm "Glossary Entry") col\_ind as the last component, which mirrors the structure of the DDIC database table. Three rows are chosen to be updated. From these rows, however, only the field COL4 is marked for update. When the UPDATE FROM statement is carried out, only the three indicated fields are updated. Without the set indicators, the three rows would have been overwritten entirely and all fields for which no value was specified would have been initialized (see image below).

Note: The following code is an extract from the executable example [UPDATE, SET INDICATORS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenupdate_set_indicators_abexa.htm). The results shown in the image can be replicated with the executable example.

TYPES ind\_wa TYPE demo\_update WITH INDICATORS col\_ind
             TYPE abap\_bool.
DATA ind\_tab TYPE TABLE OF ind\_wa.
ind\_tab = VALUE #(
       ( id = 'D' col4 = 4000 col\_ind-col4 = abap\_true )
       ( id = 'E' col4 = 5000 col\_ind-col4 = abap\_true )
       ( id = 'F' col4 = 6000 col\_ind-col4 = abap\_true ) ).
UPDATE demo\_update FROM TABLE @ind\_tab
                   INDICATORS SET STRUCTURE col\_ind.

result1 shows the result with set indicators, result2 without set indicators.

![Figure](abdoc_set_indicators.png)

Executable Example

[UPDATE, SET INDICATORS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenupdate_set_indicators_abexa.htm)

Alternative 2   

... INDICATORS (indicator\_syntax)

Effect

Instead of the static specification, a parenthesized data object indicator\_syntax can be specified after INDICATORS. This data object must contain the syntax shown for the static specification when the statement is executed. The syntax in indicator\_syntax is not case-sensitive. If the data object indicator\_syntax has no content, then the addition has no effect.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenescape_functions.htm). See [SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_inj_dyn_tokens_scrty.htm).

Example

This example is similar to the example for specifying information statically. The DDIC database table DEMO\_UPDATE is updated from the work area col\_ind and only the column COL4 is marked for update. In contrast to the first example, the set indicator is specified dynamically. The class CL\_DEMO\_UPDATE\_SET\_IND\_DYN fills the DDIC database table with values, carries out the UPDATE FROM statement, and displays the result.

TYPES ind\_wa TYPE demo\_update WITH INDICATORS col\_ind.
DATA  ind\_wa TYPE ind\_wa.
FINAL(indicator\_syntax) = \`SET STRUCTURE col\_ind\`.
ind\_wa = VALUE #( id = 'I' col4 = 4000 col\_ind-col4 = '01' ).
UPDATE demo\_update FROM @ind\_wa INDICATORS (indicator\_syntax).

Continue
![Example](exa.gif "Example") [UPDATE, SET INDICATORS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenupdate_set_indicators_abexa.htm)