  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20PROVIDE%2C%20Short%20Form%2C%20ABAPPROVIDE_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

PROVIDE, Short Form

This statement should be used by specialists only.
In-depth knowledge of the corresponding environment is essential.
This environment is not part of ABAP and is not documented here.

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprovide_shortref.htm)

Obsolete Syntax

PROVIDE *{*\**|**{*comp1 comp2 ...*}**}* FROM itab1
        *{*\**|**{*comp1 comp2 ...*}**}* FROM itab2
        ...
        BETWEEN extliml AND extlimu.

Effect

This form of the statement PROVIDE, which is not allowed in classes, is a short form of the allowed [variant](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprovide.htm). The compiler distinguishes the long form from the short form by the additions FIELDS, to be specified explicitly in front of the component specifications.

The short form is exclusively intended for processing internal tables for HR [info types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninfo_type_glosry.htm "Glossary Entry"), which have been declared with the special statement [INFOTYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinfotypes.htm) or which have the corresponding structure.

In principle, the short form of the statement PROVIDE works like the allowed [variant](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprovide.htm). Unlike the allowed [variant](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprovide.htm), however, fewer additions are possible here. A table cannot be specified more than once in the short form. The internal tables must have [header lines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenheader_line_glosry.htm "Glossary Entry") and the additions to be specified in the long form are added in the short form by the runtime framework, as described below.

For the PROVIDE loop to function correctly, the same conditions apply as in the [long form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprovide.htm). However, no exceptions are raised if one of the involved tables is not sorted or if there are overlapping intervals.

Interval limits BOUNDS

The columns for interval limits to be specified in the [long form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprovide.htm) as intlim1 and intlim2 using the addition BOUNDS are properties of the relevant tables in the short form and must be specified when they are declared.

This is done using the addition VALID BETWEEN, which can be specified after DATA END OF if an internal table is declared with the obsolete addition OCCURS of the statement DATA BEGIN OF. If an internal table is declared using the special statement [INFOTYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinfotypes.htm), these are the BEGDA and ENDDA columns. If no columns are specified for the interval limits in the declaration, the short form of PROVIDE uses the first two columns of the internal table.

Work area INTO

In the short form, the headers of the internal table are used implicitly for the work areas that have to be specified as wa in the [long form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprovide.htm) using the addition INTO.

Flag VALID

For the data objects to be specified as flag in the [long form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprovide.htm) using the addition VALID, a data object itab\_valid of type c and length 1 is created in the short form for every table itab.

Condition WHERE

No conditions can be specified in the short form.

Addition INCLUDING GAPS

In the short form, the PROVIDE loop cannot be forced for every interval.

Hint

The system fields sy-tabix and sy-subrc are not filled by the short form for PROVIDE - ENDPROVIDE.

Example

This example has the same result as the example for the [long form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprovide.htm). Here, the tables itab1 and itab2 have header lines and the columns col1 and col2 are defined as interval limits of type i using the addition VALID of the statement DATA END OF.

DATA: BEGIN OF itab1 OCCURS 0,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE string,
      END OF itab1 VALID BETWEEN col1 AND col2.
DATA: BEGIN OF itab2 OCCURS 0,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE string,
      END OF itab2 VALID BETWEEN col1 AND col2.
itab1-col1 = 1.
itab1-col2 = 6.
itab1-col3 = 'Itab1 Int1'.
APPEND itab1 TO itab1.
itab1-col1 = 9.
itab1-col2 = 12.
itab1-col3 = 'Itab1 Int2'.
APPEND itab1 TO itab1.
itab2-col1 = 4.
itab2-col2 = 11.
itab2-col3 = 'Itab2 Int1'.
APPEND itab2 TO itab2.
DATA output TYPE TABLE OF string WITH EMPTY KEY.
PROVIDE col3 FROM itab1
        col3 FROM itab2
             BETWEEN 2 AND 14.
  APPEND | { itab1-col1 WIDTH = 2 } { itab1-col2 WIDTH = 2 } {
             itab1-col3 } { itab1\_valid } | TO output.
  APPEND | { itab2-col1 WIDTH = 2 } { itab2-col2 WIDTH = 2 } {
             itab2-col3 } { itab2\_valid } | TO output.
  APPEND INITIAL LINE TO output.
ENDPROVIDE.
cl\_demo\_output=>display( output ).