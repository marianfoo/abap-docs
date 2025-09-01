  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) →  [INSERT itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_itab.htm) → 

INSERT, line\_spec

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_itab_shortref.htm)

Syntax

... wa
  *|* *{*INITIAL LINE*}*
  *|* *{*LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkeyname.htm)*\]**}* ...

Alternatives:

[1\. ... wa](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... INITIAL LINE](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_3@3@)

Effect

Either a work area wa, an initial line INITIAL LINE, or multiple lines of an internal table jtab can be appended.

Alternative 1

... wa

Effect

A new line is created to which the content of the work area wa is assigned. wa is a [general expression position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). The following applies here:

-   When inserting using the table key, wa [must be compatible with](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompatible_glosry.htm "Glossary Entry") the line type of the internal table. Exceptions to this rule are any [constructor expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") whose result type can be incompatible with the line type and whose result is converted to the line type if possible.

-   When inserting using the table index, wa can be incompatible with the line type of the internal table and is, if necessary, converted to the relevant line type, in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_rules.htm).

If a conversion error occurs in the conversion, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead. If an [arithmetic expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") is specified for wa, the line type of the internal table is used to determine [calculation type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_type_glosry.htm "Glossary Entry").

When inserting individual lines into an internal table with non-unique [table keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_key.htm), the order of the duplicate lines in relation to these keys is determined by the insertion order of the individual lines. In the case of secondary table keys, this occurs during the [lazy update](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlazy_update_glosry.htm "Glossary Entry").

If there is a conflict with the existing unique primary table key, no line is inserted, in key access occurs, sy-subrc is set to 4, and an index access, an uncatchable exception is raised. In the case of a conflict with a unique secondary table key, a catchable exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised.

Hints

-   When inserting using the table key, incompatible work areas can be converted to the line type using the conversion operator [CONV](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_conv.htm).
    

-   Specifying a [calculation expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencalculation_expression_glosry.htm "Glossary Entry") for wa is usually only useful for elementary line types.
    

-   Outside of classes, an [obsolete short form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_short_forms.htm) is possible where wa INTO can be omitted if the internal table has an identically named [header line](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenheader_line_glosry.htm "Glossary Entry") itab. The statement then uses the header line as the work area implicitly.
    

Example

Insertion of a structure constructed using the value operator [VALUE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_value.htm) into an internal table.

DATA itab TYPE HASHED TABLE OF scarr WITH UNIQUE KEY carrid.
INSERT VALUE #( carrid   = 'XXX'
                carrname = 'yyyyyyyyy'
                currcode = 'ZZ'
                url      = '...' ) INTO TABLE itab.

Alternative 2

... INITIAL LINE

Effect

A new line is created in which every component contains its type-dependent [initial value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_complete.htm).

Example

Insertion of an initial line that is simultaneously linked to a field symbol using the addition [ASSIGNING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_itab_result.htm). This means that the initial line can be processed directly.

DATA itab TYPE TABLE OF spfli.
FIELD-SYMBOLS <line> LIKE LINE OF itab.
INSERT INITIAL LINE INTO itab INDEX 1 ASSIGNING <line>.
<line>-carrid = '...'.
...

Alternative 3

... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]*

Effect

The lines of an internal table jtab are appended as a block. jtab is a [functional operand position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The line types of itab and jtab must be compatible when inserting using the table key and convertible when inserting using the index.

The lines to be inserted are sequentially taken from the table jtab. The order in which the lines are taken is the same as for the statement [LOOP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab.htm) and can also be affected by specifying a table key [keyname](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkeyname.htm) after USING KEY. The additions FROM idx1 and TO idx2 have the same syntax and effect as for [LOOP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_cond.htm) with respect to jtab.

When inserting lines as a block into an internal table with non-unique [primary table keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_key_glosry.htm "Glossary Entry"), the order of the duplicate lines in relation to this primary key is retained. This does not apply for [secondary keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_key_glosry.htm "Glossary Entry").

-   If there is already a duplicate entry in a sorted target table, the duplicates of the source block are inserted in their original order in front of the first duplicate in the target table.

-   When inserting in standard tables, however, INSERT always works like the statement [APPEND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend.htm) and the lines are appended in their original order after the last line as in the addition [LINES OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapappend_linespec.htm) .

If there is a conflict with an existing unique table key, a catchable exception is raised when inserting multiple lines from an internal table. If a conversion error occurs when lines are inserted, the exception cannot be handled using CX\_SY\_CONVERSION\_ERROR and the associated runtime error occurs instead.

Hint

When an internal table is constructed, the constructor operators [NEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_new.htm) and [VALUE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_new.htm) can also insert multiple lines from a table into the target table using [LINES OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennew_constructor_params_lspc.htm).

Example

Insertion of the lines of an internal table itab into the same table. The lines are inserted in front of the existing first line and in ascending order due to the specification of the sorted secondary key skey being specified.

DATA itab TYPE TABLE OF i
          WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line.
itab = VALUE #( FOR i = 1 UNTIL i > 10 ( 11 - i ) ).
INSERT LINES OF itab USING KEY skey INTO itab INDEX 1.
cl\_demo\_output=>display( itab ).