---
title: "Obsolete Syntax"
description: |
  READ TABLE itab      WITH KEY dobj    WITH KEY = dobj   BINARY SEARCH result(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_outdesc.htm). Alternatives: 1. ...  (#!ABAP_ALTERNATIVE_1@1@) 2. ... WITH KEY dobj(#!ABAP_AL
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_obsolet.htm"
abapFile: "abapread_table_obsolet.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "abapread", "table", "obsolet"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20READ%20TABLE%2C%20obsolete_key%2C%20ABAPREAD_TABLE_OBSOLET%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

READ TABLE, obsolete\_key

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_itab_shortref.htm)

Obsolete Syntax

READ TABLE itab *{* *{* *}*
                *|* *{* WITH KEY dobj *}*
                *|* *{* WITH KEY = dobj *}* *}* *\[*BINARY SEARCH*\]* [result](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_outdesc.htm).

Alternatives:

[1\. ... *{* *}*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... WITH KEY dobj](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... WITH KEY = dobj](#!ABAP_ALTERNATIVE_3@3@)

Addition:

[... BINARY SEARCH](#!ABAP_ONE_ADD@1@)

Effect

As well as the additions specified in the statement [READ TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table.htm) for specifying the individual lines to be read, outside of classes the search key can also be specified in three obsolete forms.

Alternative 1   

... *{* *}*

Effect

If the search key is not specified explicitly, the internal table itab must be a [standard table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a [header line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheader_line_glosry.htm "Glossary Entry"). The first line found in the internal table is read whose values in the columns of the [standard key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_key_glosry.htm "Glossary Entry") match the values in the corresponding components of the header line. Key fields in the header line that only contain blanks are handled as if they match all values. If all the key fields in the header line only contain blanks, the first entry in the table is read. The standard key of the internal table cannot contain any byte-like components.

Hints

-   The statement READ TABLE itab ... is not the same as the explicit specification of the header line itab as a work area wa in the statement [READ TABLE itab FROM wa ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_key.htm), since the table key is used for the search in the latter and not the search key of the header line. This is because key fields that contain blanks do not match all fields of the internal table.
-   The search key can be omitted regardless of the additional [obsolete short form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_short_forms.htm) (where no explicit target area is specified).

Example

Unlike the example for [READ TABLE - table\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_key.htm), no entry is usually found in the following READ statement, since the entire standard key is compared. In particular, the components deptime and arrtime that belong to the standard key of the internal table are of type t and contain the value 000000 instead of blanks as an [initial value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_value_glosry.htm "Glossary Entry") in the header line. Only table entries that contain exactly these values are read.

DATA: spfli\_tab TYPE STANDARD TABLE OF spfli
                WITH NON-UNIQUE KEY carrid connid
                WITH HEADER LINE.
FIELD-SYMBOLS <spfli> TYPE spfli.
SELECT \*
       FROM spfli
       WHERE carrid = 'LH'
       INTO TABLE @spfli\_tab.
spfli\_tab-carrid = 'LH'.
spfli\_tab-connid = '0400'.
READ TABLE spfli\_tab ASSIGNING <spfli>.

Alternative 2   

... WITH KEY dobj

Effect

If a single data object is specified directly after the addition WITH KEY, the internal table itab must be a [standard table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry"). The first line found in the internal table is read whose left-aligned content matches the content of the data object dobj. The data object dobj expects only [flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry") data types. In the search, the start of the table lines that are longer than the data object dobj is handled as if they have the same data type dobj ([casting](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencast_casting_glosry.htm "Glossary Entry")).

Example

To use the addition WITH KEY dobj for evaluating specific key fields, a structure must be created that matches the corresponding initial part of the line type. In contrast to the example for [READ TABLE - table\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_key.htm), the client column mandt of the table spfli\_tab must be respected by the search key in the following program section.

DATA: spfli\_tab TYPE STANDARD TABLE OF spfli
                WITH NON-UNIQUE KEY carrid connid.
DATA: BEGIN OF key\_struc,
        mandt  TYPE spfli-mandt  VALUE '000',
        carrid TYPE spfli-carrid VALUE 'LH',
        connid TYPE spfli-connid VALUE '0400',
      END OF key\_struc.
FIELD-SYMBOLS <spfli> TYPE spfli.
SELECT \*
       FROM spfli
       WHERE carrid = 'LH'
       INTO TABLE @spfli\_tab.
READ TABLE spfli\_tab WITH KEY key\_struc ASSIGNING <spfli>.

Alternative 3   

... WITH KEY = dobj

Effect

If the addition WITH KEY is followed by a single data object after an equals sign, the first line found in the internal table itab is read whose entire content matches the content of the data object dobj. It must be possible to convert the data object dobj to the line type of the internal table. If the data type of dobj does not match the line type of the internal table, a conversion is performed for the comparison in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rules.htm).

Hint

This statement has the same function as specifying the [pseudo component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line as a [free key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_free.htm), and is replaced by this component.

READ TABLE itab WITH KEY table\_line = dobj ...

Example

Determines (obsolete) whether a line in an internal table exists with an elementary line type. The comment lines show the generally valid syntax with the pseudo-component table\_line.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
itab = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ).
READ TABLE itab WITH KEY = 4
           TRANSPORTING NO FIELDS.
\* READ TABLE itab WITH KEY table\_line = 4
\*                 TRANSPORTING NO FIELDS.
IF sy-subrc = 0.
  ...
ENDIF.

Addition   

... BINARY SEARCH

Effect

The addition BINARY SEARCH produces a binary search of the table, not linear. The same prerequisites and restrictions apply as when using the addition with a [free search key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_free.htm). Before the correct line can be found, the internal table must be sorted in ascending order as follows:

-   If the search key is not specified explicitly, by the components of the [standard key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_key_glosry.htm "Glossary Entry").
-   If the search key is specified using WITH KEY dobj, by its left-aligned content in the length of the data object.
-   If the search key is specified using WITH dobj, by the entire table line.

Hint

The fact that the addition BINARY SEARCH requires a different sorting for each of the obsolete variants can be confusing and produce unintended behavior. For this reason, the addition should not be used in the case of the obsolete variants and the non-obsolete variants of [READ TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table.htm) used instead.

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: The key has stricter alignment requirements than the individual table lines.
    Runtime error: READ\_BAD\_KEY\_ALIGN
-   Cause: The key is longer than a table line and cannot be truncated.
    Runtime error: READ\_BAD\_KEY\_PARTIAL