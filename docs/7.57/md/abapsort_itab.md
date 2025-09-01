  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SORT itab, ABAPSORT_ITAB, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
 improvement:)

SORT itab

[Short Reference](javascript:call_link\('abapsort_itab_shortref.htm'\))

Syntax

SORT itab *\[*STABLE*\]*
          *{* *{* *\[*ASCENDING*|*DESCENDING*\]*
              *\[*AS TEXT*\]*
              *\[*BY *{* [comp1](javascript:call_link\('abenitab_components.htm'\)) *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]**}*
                  *{* [comp2](javascript:call_link\('abenitab_components.htm'\)) *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]**}*
                  ... *\]* *}*
          *|* *{* *\[*BY (otab)*\]* *}*
          *|* *{* *\[*BY expr*\]* *}* *}*.

Additions:

[1\. ... STABLE](#!ABAP_ADDITION_1@1@)
[2\. ... ASCENDING*|*DESCENDING](#!ABAP_ADDITION_2@2@)
[3\. ... AS TEXT](#!ABAP_ADDITION_3@3@)
[4\. ... BY compi *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]*](#!ABAP_ADDITION_4@4@)
[5\. ... BY (otab)](#!ABAP_ADDITION_5@5@)
[6\. ... BY expr](#!ABAP_ADDITION_6@6@)

Effect

This statement sorts an internal table itab according to the content of its components. Here, size comparisons are performed by default using the general [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)), that is:

-   Numeric and byte-like components are sorted by their values.
-   Character-like components are sorted by default by their binary representation ([code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry")). Textual sorting of character-like components can be performed using the addition AS TEXT.
-   The sizes of other component types are compared using the corresponding rules for [reference variables](javascript:call_link\('abenlogexp_rules_operands_ref.htm'\)), [structures](javascript:call_link\('abenlogexp_rules_operands_struc.htm'\)), and [internal tables](javascript:call_link\('abenlogexp_rules_operands_itab.htm'\)).

If no explicit sort key is specified using the addition BY, the internal table itab is sorted by the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry"). The priority of the sort depends on the order in which the [key fields](javascript:call_link\('abaptypes_keydef.htm'\)) are specified in the table definition. In [standard keys](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"), the sort is prioritized according to the order of the key fields in the line type of the table. If the primary table key of a standard table is [empty](javascript:call_link\('abenitab_empty_key.htm'\)), no sort takes place. If this is known statically, the syntax check produces a warning.

Sorting is unstable by default, which means that the relative order of lines that do not differ in sort keys is not preserved when they are sorted. The order can be different depending on the platform or when sorted multiple times. The addition STABLE can be used for stable sorting.

itab expects a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") or a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry").

-   In standard tables, the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry") is applied in accordance with the sort order
-   In hashed tables, the internal order is modified. This internal order was defined either by inserting lines into the internal table or by a previous sort using the statement SORT.

In both table categories, SORT specifies the order in which a subsequent [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) runs without the addition USING KEY.

Sorted tables cannot be sorted using SORT and applying the statement SORT to [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") is forbidden by the syntax. If it is not determined until runtime that a sorted table is to be sorted, an uncatchable exception is raised if this action could modify the existing sorting. The latter occurs in the following cases:

-   if the addition BY is used to specify a different sort key as the initial part of the table key.
-   if the addition DESCENDING is used.
-   if the addition AS TEXT is used.
-   if an attribute of an object is specified as a component in the addition BY.

Otherwise, the statement SORT is ignored for sorted tables.

Hints

-   It is best to specify an explicit sort key behind BY, if possible. An implicit sort behind the [primary table key](javascript:call_link\('abentable_key_glosry.htm'\) "Glossary Entry"), which can itself, in standard tables, be defined implicitly as a [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"), makes a program difficult to understand and possibly unpredictable.
-   When using the primary table key, it should be noted that this key can be the [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"), which can also have unexpected consequences:
    -   If the line type is structured, the table is sorted by all character-like and byte-like components.
    -   The standard key of a standard table can be [empty](javascript:call_link\('abenitab_empty_key.htm'\)).
-   Secondary table keys cannot be specified as sort keys.
-   Sorting using SORT does not affect the assignment of lines to a [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry").
-   The addition [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) of the statement [LOOP AT itab](javascript:call_link\('abaploop_at_itab.htm'\)) or of a [FOR expression](javascript:call_link\('abenfor_groups_of.htm'\)) also has the additions ASCENDING and DESCENDING for sorting groups. These can be used as an extension to the statement SORT if its sort criteria are not sufficient (see the [executable example](javascript:call_link\('abenloop_group_by_sort_abexa.htm'\))).
-   It is possible to sort columns with [reference types](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry") but doing this is questionable. Here, it is important to note that no comparison rule is defined for non-initial invalid references. An internal table can only be sorted by valid or initial references. A non-initial, invalid reference leads to a runtime error if it is involved in sorting.
-   The system class CL\_ABAP\_ITAB\_UTILITIES contains method VIRTUAL\_SORT, which can be used to virtually sort a set of internal tables. See also the executable [examples](javascript:call_link\('abenvirtual_sort_abexas.htm'\)) listed below.

Example

Simplest form of the statement SORT for internal tables. The hashed table carriers is sorted by its primary key, that is by the column carrid.

DATA carriers TYPE HASHED TABLE OF scarr
              WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE @carriers.
SORT carriers.

Executable Examples

-   [Sorting Internal Tables](javascript:call_link\('abensort_stable_abexa.htm'\))
-   [Sorting Internal Tables with Secondary Keys](javascript:call_link\('abensort_itab_sec_key_abexa.htm'\))

Addition 1   

... STABLE

Effect

STABLE is used to achieve stable sorting, which means that the relative order of lines that do not differ in the sort key remains unchanged in the sort. If the addition STABLE is not specified, the order is not stable:

-   The order can depend on the platform.
-   Multiple sorting of a table using the same sort key can produce a different order each time the table is sorted.

Example

Stable sorting of the internal table flights by columns cityfrom cityto, whereby the order within this sorting with respect to carrid and connid is preserved.

SELECT carrid, connid, cityfrom, cityto
       FROM spfli
       ORDER BY carrid, connid
       INTO TABLE @DATA(flights).
SORT flights STABLE BY cityfrom cityto.

Addition 2   

... ASCENDING*|*DESCENDING

Effect

The addition ASCENDING or DESCENDING can be used to specify the sort direction explicitly as ascending or descending. If neither of the additions is specified, the table is sorted in ascending order. This sort direction can be overwritten after the addition BY for components listed individually here.

Example

The internal table itab is sorted by its primary key in descending order, that is, by its lines. Next, [LOOP AT GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) can be used for grouping and determine the number of lines per group.

DATA itab TYPE TABLE OF i WITH NON-UNIQUE KEY table\_line.
FINAL(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                        min  = 1
                                        max  = 10 ).
itab = VALUE #( FOR i = 1 UNTIL i > 100 ( rnd->get\_next( ) ) ).
SORT itab DESCENDING.
LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>)
             GROUP BY ( key = <fs> size = GROUP SIZE )
             ASSIGNING FIELD-SYMBOL(<key>).
  cl\_demo\_output=>write( |{ <key>-key WIDTH = 4
                         }{ <key>-size }| ).
ENDLOOP.
cl\_demo\_output=>display( ).

Addition 3   

... AS TEXT

Effect

The addition AS TEXT specifies that [text-like](javascript:call_link\('abentextlike_data_type_glosry.htm'\) "Glossary Entry") components are sorted in accordance with the [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") of the current [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry"). If AS TEXT is not specified, text-like components are sorted according to the encoding in the code page of the current text environment. This can be overwritten after the addition BY for the components listed individually here. The text environment is set when an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is opened or by using the statement [SET LOCALE](javascript:call_link\('abapset_locale.htm'\)).

Hints

-   The result of a sorting without the addition AS TEXT depends on the operating system of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry"). Although the sequence of individual letters that belong to the activated language remains the same across different operating systems, there are differences in terms of the characters that do not belong to the alphabet of the activated language. Even if only the letters from the alphabet of the activated language are used, some slight differences occur when sorting complete words. Furthermore, the order of uppercase and lowercase letters is specific to the operating system.
-   The use of the addition AS TEXT usually makes the statement [CONVERT TEXT](javascript:call_link\('abapconvert_text.htm'\)) superfluous in the context of internal tables.
-   A sort without the addition AS TEXT is considerably faster than a sort with this addition. If it is certain that both sorts produce the same order, the addition AS TEXT is not necessary. The latter can be the case if, for example, text-like components contain characters from the [ASCII](javascript:call_link\('abenascii_glosry.htm'\) "Glossary Entry") character set only and only lowercase or uppercase letters.

Example

Sorting of a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") text\_tab by the order in the code page and in accordance with the locale of the current [text environment](javascript:call_link\('abentext_environment.htm'\)). If a western European text environment is configured, the sorts produce the orders Miller, Moller, Muller, Möller and Miller, Moller, Möller, Muller respectively (see also the [executable example](javascript:call_link\('abenset_locale_abexa.htm'\)) for SET LOCALE).

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA text\_tab TYPE HASHED TABLE OF string
               WITH UNIQUE KEY table\_line.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    text\_tab = VALUE #(
      ( \`Muller\` )
      ( \`Möller\` )
      ( \`Moller\` )
      ( \`Miller\` ) ).
    SORT text\_tab.
    cl\_demo\_output=>write\_data( text\_tab ).
    SORT text\_tab AS TEXT.
    cl\_demo\_output=>display\_data( text\_tab ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Executable Example

[Sorting Internal Tables Alphabetically](javascript:call_link\('abensort_text_abexa.htm'\))

Addition 4   

... BY compi *\[*ASCENDING*|*DESCENDING*\]* *\[*AS TEXT*\]*

Effect

The addition BY compi does not sort the table by the [primary table key](javascript:call_link\('abaptypes_keydef.htm'\)), but by the components comp1 comp2... specified after it. The components are specified as described under [Specifying Components](javascript:call_link\('abenitab_components.htm'\)). If all components are specified using name variables and these contain only blanks, no sort takes place. The priority of the sort depends on the order in which the components comp1 comp2 ... are specified from left to right. The specified components can also be duplicated or overlapping. The specified components can have any data type. The relevant [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) apply to the evaluation.

If neither of the additions ASCENDING or DESCENDING are specified after compi, the sort direction specified by addition 2 is used. If one of the additions ASCENDING or DESCENDING is specified, it overwrites the default for this component.

If the addition AS TEXT is not specified after a text-like component compi, the default specified by addition 3 is used. If the addition AS TEXT is specified after a text-like component, it overwrites the default for this component. In non-text-like components, AS TEXT cannot be specified, unless a structured component is specified. In structured components, AS TEXT only affects text-like components.

Hints

-   If the line type of the internal table is not known statically, the components can only be specified dynamically and not directly.
-   Instead of individual dynamic components, an internal table can be specified directly as otab or as the result of an expression expr as a dynamic sort key (see additions 5 and 6). Using a table like this has the advantage that any exceptions are catchable. When specifying the table, the number of components of the sort key is also dynamic. In contrast, when individual dynamic components are used, a character-like data object must be specified for any required component, which is ignored if it only contains blank characters.
-   An [obsolete variant](javascript:call_link\('abapsort_itab_obsolete.htm'\)) allows field symbols to also be specified for the components outside of classes, for standard tables.

Example

Sorting of the internal table itab in ascending order by column col1 and in descending order by column col2.

TYPES:
  BEGIN OF line,
    col1 TYPE c LENGTH 1,
    col2 TYPE i,
  END OF line.
DATA itab TYPE STANDARD TABLE OF line WITH EMPTY KEY.
itab = VALUE #( ( col1 = 'A' col2 = 6 )
                ( col1 = 'B' col2 = 4 )
                ( col1 = 'B' col2 = 7 )
                ( col1 = 'C' col2 = 1 )
                ( col1 = 'C' col2 = 3 )
                ( col1 = 'B' col2 = 9 )
                ( col1 = 'A' col2 = 2 )
                ( col1 = 'A' col2 = 5 )
                ( col1 = 'C' col2 = 8 ) ).
SORT itab BY col1 ASCENDING col2 DESCENDING.
cl\_demo\_output=>display( itab ).

Addition 5   

... BY (otab)

Effect

The addition BY (otab) does not sort the table by the [primary table key](javascript:call_link\('abaptypes_keydef.htm'\)), but by the component specified dynamically in the internal table otab. Each line of the table otab defines a component of the sort key. The priority of the sort is based on the order of the lines in otab. If the table otab is initial, the table is not sorted.

For otab, a standard table of the table type ABAP\_SORTORDER\_TAB from the ABAP Dictionary must be specified. The line type of this table is the dictionary structure ABAP\_SORTORDER with the following components:

-   NAME of the type [SSTRING](javascript:call_link\('abenddic_builtin_types.htm'\))
    
    for specifying a component of the sort key. The component is specified in the form comp\_name\[+off(len)\], where comp\_name must be the name of a component in itab in uppercase letters. The component name may contain [offsets and lengths](javascript:call_link\('abenoffset_length.htm'\)), structure component selectors, and component selectors for assigning structured data objects and attributes in classes or objects.
    
-   DESCENDING of the type CHAR with length 1
    
    for specifying the sort direction for the current component. If DESCENDING is initial, the sort is performed in ascending order. If DESCENDING has the value X, the table is sorted in descending order.
    
-   ASTEXT of the type CHAR with length 1
    
    for the text sorting of the current component. If ASTEXT has the value X, the sort is performed as with the addition AS TEXT. This is only possible for character-like components. If ASTEXT is initial, character-like components are sorted in accordance with their binary representation.
    

If a column of otab has invalid content, that is, if NAME contains the name of a component that does not exist or an incorrect offset/length or if DESCENDING and ASTEXT do not contain X or the initial value, a catchable exception of the class CX\_SY\_DYN\_TABLE\_ILL\_COMP\_VAL is raised.

Hints

-   The addition BY (otab) cannot be combined with BY compi.
-   When using the addition BY (otab), it is not possible to use DESCENDING or AS TEXT to specify a descending sort direction or textual sorting for all components.
-   If a single parenthesized data object (dobj) is specified after the addition BY, its data type decides whether its content is used to specify a [single dynamic component](javascript:call_link\('abenitab_components.htm'\)) or multiple components. In either case, no sort takes place if dobj is initial.

Example

Reading of a database table into a dynamic internal table dynamically and sorting its content dynamically. The name of the database table and the names of the columns by which the table sorted can be entered.

DATA dbtab TYPE c LENGTH 30 VALUE 'spfli'.
cl\_demo\_input=>add\_field( CHANGING field = dbtab ).
DATA columns TYPE string VALUE \`cityfrom, cityto\`.
cl\_demo\_input=>request( CHANGING field = columns ).
dbtab = condense( to\_upper( dbtab ) ).
DATA dref  TYPE REF TO data.
FIELD-SYMBOLS <itab> TYPE STANDARD TABLE.
TRY.
    CREATE DATA dref TYPE STANDARD TABLE OF (dbtab).
  CATCH cx\_sy\_create\_data\_error.
    cl\_demo\_output=>display( 'Wrong data type!' ).
    LEAVE PROGRAM.
ENDTRY.
TRY.
    SELECT \*
           FROM (dbtab)
           INTO TABLE @dref->\*.
  CATCH cx\_sy\_dynamic\_osql\_semantics.
    cl\_demo\_output=>display( 'Wrong database table!' ).
    LEAVE PROGRAM.
ENDTRY.
SPLIT columns AT \`,\` INTO TABLE FINAL(column\_tab).
FINAL(order) = VALUE abap\_sortorder\_tab(
                FOR wa IN column\_tab
               ( name = condense( to\_upper( wa ) ) ) ).
TRY.
    SORT <itab> BY (order).
  CATCH cx\_sy\_dyn\_table\_ill\_comp\_val.
    cl\_demo\_output=>display(  'Wrong column name!' ).
    LEAVE PROGRAM.
ENDTRY.
cl\_demo\_output=>display( <itab> ).

Addition 6   

... BY expr

Effect

The addition BY expr can be used to specify an expression or a functional method call expr whose result is an internal table with the same type and content as in the preceding addition BY (otab). expr is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). The behavior is the same as when specifying a parenthesized internal table directly.

Hint

Parentheses cannot be placed around expr.

Example

The above example for specifying BY (otab) can be written shorter as shown below. Instead of specifying the unnecessary internal table order, it is possible to directly specify the tabular value constructed using the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) of the required content.

...
SPLIT columns AT \`,\` INTO TABLE DATA(column\_tab).
TRY.
    SORT <itab> BY VALUE #( FOR wa IN column\_tab
                ( name = condense( to\_upper( wa ) ) ) ).
  CATCH cx\_sy\_dyn\_table\_ill\_comp\_val.
    cl\_demo\_output=>display(  'Wrong column name!' ).
    LEAVE PROGRAM.
ENDTRY.
...

Executable Example

[Sorting Internal Tables Dynamically](javascript:call_link\('abensort_itab_exp_abexa.htm'\)).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_DYN\_TABLE\_ILL\_LINE\_TYPE

-   Cause: The table otab has an invalid line type.
    Runtime error: DYN\_TABLE\_ILL\_LINE\_TYPE

CX\_SY\_DYN\_TABLE\_ILL\_COMP\_VAL

-   Cause: A column of the table otab contains an invalid value.
    Runtime error: DYN\_TABLE\_ILL\_COMP\_VAL

Uncatchable Exceptions

-   Cause: A sort criterion specified dynamically in the form (name) with the explicit addition AS TEXT is not text-like.
    Runtime error: SORT\_AS\_TEXT\_BAD\_DYN\_TYPE
-   Cause: A field symbol used as a dynamic sort criterion with an explicit addition AS TEXT is not text-like.
    Runtime error: SORT\_AS\_TEXT\_BAD\_FS\_TYPE
-   Cause: A field symbol used as a dynamic sort criterion does not point to the header line of the internal table to be sorted.
    Runtime error: SORT\_ITAB\_FIELD\_INVALID
-   Cause: For a table of the type SORTED TABLE, the sort key does not match a beginning piece of the table key.
    Runtime error: SORT\_SORT\_ILL\_KEY\_ORDER
-   Cause: The additions DESCENDING and AS TEXT are not allowed for tables of the type SORTED TABLE.
    Runtime error: SORT\_SORT\_ILLEGAL
-   Cause: Sorting method is not external (E) or internal (I)
    Runtime error: SORT\_ILLEGAL\_MODE

Continue
![Example](exa.gif "Example") [Sorting Internal Tables](javascript:call_link\('abensort_stable_abexa.htm'\))
![Example](exa.gif "Example") [Sorting Internal Tables with Secondary Keys](javascript:call_link\('abensort_itab_sec_key_abexa.htm'\))
![Example](exa.gif "Example") [Sorting Internal Tables Alphabetically](javascript:call_link\('abensort_text_abexa.htm'\))
![Example](exa.gif "Example") [Sorting Internal Tables Dynamically](javascript:call_link\('abensort_itab_exp_abexa.htm'\))