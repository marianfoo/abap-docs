  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Internal Table Processing](javascript:call_link\('abenitab_obsolete.htm'\)) → 

READ TABLE- obsolete\_key

[Quick Reference](javascript:call_link\('abapread_table_itab_shortref.htm'\))

Obsolete Syntax

READ TABLE itab *{* *{* *}*
                *|* *{* WITH KEY dobj *}*
                *|* *{* WITH KEY = dobj *}* *}* *\[*BINARY SEARCH*\]* [result](javascript:call_link\('abapread_table_outdesc.htm'\)).

Alternatives:

[1\. ... *{* *}*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... WITH KEY dobj](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... WITH KEY = dobj](#!ABAP_ALTERNATIVE_3@3@)

Addition:

[... BINARY SEARCH](#!ABAP_ONE_ADD@1@)

Effect

As well as the additions specified in the statement [READ TABLE](javascript:call_link\('abapread_table.htm'\)) for specifying the individual rows to be read, outside of classes the search key can also be specified in three obsolete forms.

Alternative 1

... *{* *}*

Effect

If the search key is not specified explicitly, the internal table itab must be a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). The first row found in the internal table is read for which the values in the columns of the [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") match the values in the corresponding components of the header line. Key fields in the header line that only contain blanks are handled as if they match all values. If all the key fields in the header line only contain blanks, the first entry in the table is read. The standard key of the internal table cannot contain any byte-like components.

Notes

-   The statement READ TABLE itab ... is not the same as the explicit declaration of the header line itab as a work area wa in the statement [READ TABLE itab FROM wa ...](javascript:call_link\('abapread_table_key.htm'\)). In the latter, the table key and not the search key of the header field is used for the search.
    
-   The search key can be omitted regardless of the additional [obsolete short form](javascript:call_link\('abenitab_short_forms.htm'\)) (where no explicit target area is specified).
    

Example

In the following READ statement (in contrast to the example for [READ TABLE - table\_key](javascript:call_link\('abapread_table_key.htm'\))) no entry is usually found, since the whole standard key is compared. In particular, the components deptime and arrtime that belong to the standard key of the internal table are of type t and contain the value "000000" instead of blanks as an [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") in the header line. Only table entries that contain exactly these values are read.

DATA: spfli\_tab TYPE STANDARD TABLE OF spfli
                WITH NON-UNIQUE KEY carrid connid
                WITH HEADER LINE.
FIELD-SYMBOLS <spfli> TYPE spfli.
SELECT \*
       FROM spfli
       WHERE  carrid = 'LH'
       INTO TABLE @spfli\_tab.
spfli\_tab-carrid = 'LH'.
spfli\_tab-connid = '0400'.
READ TABLE spfli\_tab ASSIGNING <spfli>.

Alternative 2

... WITH KEY dobj

Effect

If a single data object is specified directly after the addition WITH KEY, the internal table itab must be a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry"). The first row found in the internal table is read whose left-justified content matches the content of the data object dobj. The data object dobj expects only [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") data types. In the search, the start of table rows that are longer than the data object dobj are handled as if they have the same data type dobj ([casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry")).

Example

To use the addition WITH KEY dobj for evaluating specific key fields, a structure must be created that corresponds to the relevant starting part of the row type. In contrast to the example for [READ TABLE - table\_key](javascript:call_link\('abapread_table_key.htm'\)), in the following program section, the client column mandt of the table spfli\_tab must be respected by the search key.

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
       WHERE  carrid = 'LH'
       INTO TABLE @spfli\_tab.
READ TABLE spfli\_tab WITH KEY key\_struc ASSIGNING <spfli>.

Alternative 3

... WITH KEY = dobj

Effect

If the addition WITH KEY is followed by a single data object after an "equals" sign, the first row found in the internal table itab is read whose entire content corresponds to the content of the data object dobj. It must be possible to convert the data object dobj to the row type of the internal table. If the data type of dobj does not match the row type of the internal table, a conversion is performed for the comparison in accordance with the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)).

Note

This statement has the same function as specifying the [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line as a [free key](javascript:call_link\('abapread_table_free.htm'\)), and is replaced by this component.

READ TABLE itab WITH KEY table\_line = dobj ...

Example

Determines (obsoletely) whether a row in an internal table exists with an elementary row type. The comment lines show the generally valid syntax with the pseudo-component table\_line.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
itab = VALUE #( FOR j = 1 UNTIL j > 10 ( j ) ).
READ TABLE itab WITH KEY = 4
           TRANSPORTING NO FIELDS.
\* READ TABLE itab WITH KEY table\_line = 4
\*                 TRANSPORTING NO FIELDS.
IF sy-subrc = 0.
  ...
ENDIF.

Addition

... BINARY SEARCH

Effect

The addition BINARY SEARCH produces a binary search of the table, not linear. The same prerequisites and restrictions apply as when using the addition with a [free search key](javascript:call_link\('abapread_table_free.htm'\)). Before the correct row can be found, the internal table must be sorted in ascending order as follows:

-   If the search key is not specified explicitly, by the components of the [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry").
    
-   If the search key is specified using WITH KEY dobj, by its left-justified content in the length of the data object.
    
-   If the search key is specified using WITH dobj, by the full table row.
    

Note

The fact that the addition BINARY SEARCH requires a different sorting in each of the obsolete variants can be confusing and produce unexpected behavior. For this reason, the addition should not be used in the case of the obsolete variants and the non-obsolete variants of [READ TABLE](javascript:call_link\('abapread_table.htm'\)) used instead.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: The key has stricter alignment requirements than the individual table rows.
    Runtime error: READ\_BAD\_KEY\_ALIGN
    
-   Cause: The key is longer than a table row and cannot be shortened.
    Runtime error: READ\_BAD\_KEY\_PARTIAL