  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Internal Table Processing](javascript:call_link\('abenitab_obsolete.htm'\)) → 

PROVIDE - Short Form

This statement should be used by specialists only.
In-depth knowledge of the corresponding environment is essential.
This environment is not part of ABAP and is not documented here.

[Quick Reference](javascript:call_link\('abapprovide_shortref.htm'\))

Obsolete Syntax

PROVIDE *{*\**|**{*comp1 comp2 ...*}**}* FROM itab1
        *{*\**|**{*comp1 comp2 ...*}**}* FROM itab2
        ...
        BETWEEN extliml AND extlimu.

Effect

This form of the statement PROVIDE, not permitted in classes, is a short form of the permitted [variant](javascript:call_link\('abapprovide.htm'\)). The compiler distinguishes the long and short forms by the additions FIELDS, to be specified explicitly before the components.

The short form is exclusively intended for editing internal tables for HR [info types](javascript:call_link\('abeninfo_type_glosry.htm'\) "Glossary Entry"), which have been declared with the special statement [INFOTYPES](javascript:call_link\('abapinfotypes.htm'\)) or which have the same structure.

In principle, the short form of the statement PROVIDE works like the permitted [variant](javascript:call_link\('abapprovide.htm'\)). Unlike the permitted [variant](javascript:call_link\('abapprovide.htm'\)), however, fewer additions are allowed here. In the short form, you cannot specify a table more than once. The internal tables must have [header lines](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") and the additions that have to be specified in the long form are enhanced in the short form by the runtime environment, as described below.

For the PROVIDE loop to function correctly, the same conditions apply as in the [long form](javascript:call_link\('abapprovide.htm'\)). However, no exceptions are raised if one of the involved tables is not sorted or if there are overlapping intervals.

Interval limits BOUNDS

The columns for interval limits to be specified in the [long form](javascript:call_link\('abapprovide.htm'\)) as intlim1 and intlim2 using BOUNDS are attributes of the relevant tables in the short form and must be specified when they are declared.

This is done using the addition VALID BETWEEN that can be specified after DATA ENDOF if an internal table is declared with the obsolete addition OCCURS of the statement DATA BEGIN OF. If an internal table is declared using the statement [INFOTYPES](javascript:call_link\('abapinfotypes.htm'\)), these are the BEGDA and ENDDA columns. If no columns are specified for the interval limits in the declaration, the short form of PROVIDE uses the first two columns of the internal table.

Work area INTO

In the short form, the headers of the internal table are used implicitly for the work areas that have to be specified as wa in the [long form](javascript:call_link\('abapprovide.htm'\)) using the addition INTO.

Flag VALID

For the data objects that have to be specified as flag in the [long form](javascript:call_link\('abapprovide.htm'\)) using the addition VALID, a data object itab\_valid of type c and length 1 is created in the short form for every table itab.

Condition WHERE

No conditions can be specified in the short form.

Addition INCLUDING GAPS

In the short form, the PROVIDE loop cannot be forced for every interval.

Note

The system fields sy-tabix and sy-subrc are not filled by the short form for PROVIDE - ENDPROVIDE.

Example

This example has the same result as the example for the [long form](javascript:call_link\('abapprovide.htm'\)). Here, the tables itab1 and itab2 have header lines and the columns col1 and col2 are defined as interval limits of type i using the addition VALID of the statement DATA END OF.

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