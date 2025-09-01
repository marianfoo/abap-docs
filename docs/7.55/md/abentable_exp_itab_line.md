  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_expr_func.htm) →  [itab - Table Expressions (table\_exp)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expressions.htm) → 

table\_exp - itab\_line

Syntax

... *{* *\[*KEY [keyname](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkeyname.htm) INDEX*\]* idx *}*
  *|* *{* [comp1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_components.htm) = operand1 [comp2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_components.htm) = operand2 ...  *}*
  *|* *{* KEY [keyname](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkeyname.htm) *\[*COMPONENTS*\]* *{*comp\_name1*|*(name1)*}* = operand1
                               *{*comp\_name2*|*(name2)*}* = operand2
                                ... *}* ...

Alternatives:

[1\. ... *\[*KEY keyname INDEX*\]* idx](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... comp1 = operand1 comp2 = operand2 ...](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... KEY keyname *\[*COMPONENTS*\]* ...](#!ABAP_ALTERNATIVE_3@3@)

Effect

Specifies a table line in the square brackets of a [table expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expressions.htm). The three alternatives are possible:

-   Index read

-   Read using a free key

-   Read using a table key

Executable Example

[Table Expressions, Specified Lines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_exp_itab_line_abexa.htm)

Alternative 1

... *\[*KEY keyname INDEX*\]* idx

Effect

The table expression reads the line with the line number specified in idx with respect to a table index. The line is read in exactly the same way as when specifying an index [INDEX idx \[USING KEY keyname\]](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table_index.htm) in the statement [READ TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table.htm). Similarly, idx is a [numeric expression position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") and the optional KEY [keyname](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkeyname.htm) INDEX is equivalent to the USING KEY [keyname](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkeyname.htm) specified here. If the optional addition is not used, itab must be an [index table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenindex_table_glosry.htm "Glossary Entry"). If the addition is used, the secondary table index of a sorted secondary key can be specified statically or dynamically.

If no line exists for the specified index, the catchable exception CX\_SY\_ITAB\_LINE\_NOT\_FOUND is usually raised. The attributes KEY\_NAME and KEY\_COMP\_VALUES are not filled here. Exceptions to this rule are when a [start value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_exp_optional_default.htm) is specified, uses in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_mem_area_writable_exp.htm), in the predicate function [line\_exists](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenline_exists_function.htm), and in the table function [line\_index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenline_index_function.htm).

Example

Reading of the line with the line number 1 once using the secondary table key skey and twice using the primary table key. It is the third line once and the first line twice.

DATA itab TYPE TABLE OF i
          WITH NON-UNIQUE KEY primary\_key COMPONENTS table\_line
          WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line.
itab = VALUE #( ( 3 ) ( 2 ) ( 1 ) ).
cl\_demo\_output=>new(
  )->write( itab\[ KEY skey INDEX 1 \]
  )->write( itab\[ KEY primary\_key INDEX 1 \]
  )->write( itab\[ 1 \]
  )->display( ).

Alternative 2

... comp1 = operand1 comp2 = operand2 ...

Effect

The table expression reads the line in accordance with the specified free search key. The search is performed in exactly the same way as when specifying the free search key [comp1 = operand1 comp2 = operand2 ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table_free.htm) in the statement [READ TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table.htm). Similarly, the components comp1 comp2 ... can be specified in accordance with the rules from the section [Specifying Components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_components.htm) and compatible or convertible operands operand1 operand2 ... must be specified that are [general expression positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

If no line is found for the specified free key, the catchable exception CX\_SY\_ITAB\_LINE\_NOT\_FOUND is usually raised. The attributes KEY\_NAME and KEY\_COMP\_VALUES are not filled here. Exceptions to this rule are when a [start value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_exp_optional_default.htm) is specified, uses in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_mem_area_writable_exp.htm), in the predicate function [line\_exists](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenline_exists_function.htm), and in the table function [line\_index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenline_index_function.htm).

Hints

-   If the free key overlaps with some or all of the [primary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_key_glosry.htm "Glossary Entry"), the optimizations described under [READ TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table_free.htm) are performed when sorted tables and hashed tables are read.

-   Unlike the statement [READ TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table.htm) with a [free key specified](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table_free.htm), no binary searches can be forced for a table expression and it is not possible to specify explicit table key for optimizing searches using secondary keys.

Example

Reading of a line in an internal table using a free specified key.

DATA itab TYPE SORTED TABLE OF spfli
          WITH UNIQUE KEY carrid connid.
SELECT \*
       FROM spfli
       INTO TABLE @itab.
TRY.
    cl\_demo\_output=>display( itab\[ cityfrom = '...'
                                   cityto   = '...' \]  ).
  CATCH cx\_sy\_itab\_line\_not\_found.
    ...
ENDTRY.

Alternative 3

... KEY keyname *\[*COMPONENTS*\]* ...

Effect

The table expression reads the line in accordance with the explicitly specified [table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_key_glosry.htm "Glossary Entry").

-   Generally, the search is performed in exactly the same way as when specifying the table key [WITH TABLE KEY *\[*keyname COMPONENTS*\]* ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table_key.htm) in the statement [READ TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table.htm). The table key must be covered completely by specifying components and no components can be specified that are not part of the table key.

-   If the table expression is specified as an argument of the [predicate function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate_function_glosry.htm "Glossary Entry") [line\_exists](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenline_exists_function.htm) or of the table function [line\_index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenline_index_function.htm), the search is performed as when specifying a free search key [WITH KEY keyname COMPONENTS ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table_free.htm) in the statement [READ TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table.htm) and the key is linked to a table key. A sorted table key does not have to be covered completely by specified components. For both categories of secondary keys, components can be specified that are not part of the table key.

Unlike the statement READ TABLE, a table expression must specify the name of the table key and the addition COMPONENTS can be omitted. Like here, the table key keyname and the key components can be specified statically or dynamically. The operands operand1 operand2 ... are [general expression positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

If no line is found for the specified table key, the catchable exception CX\_SY\_ITAB\_LINE\_NOT\_FOUND is usually raised. The attributes KEY\_NAME and, if the table is not empty, KEY\_COMP\_VALUES are not filled here. Exceptions to this rule are when a [start value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_exp_optional_default.htm) is specified, uses in the statement [ASSIGN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_mem_area_writable_exp.htm), in the predicate function [line\_exists](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenline_exists_function.htm), and in the table function [line\_index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenline_index_function.htm).

Hints

-   Before the [primary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") can be used explicitly in this variant, the key must first be specified using its predefined name primary\_key or an alias name.

-   Searches using the [primary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") do not have to specify it explicitly. Instead, the variant with a free search key can be used. If this covers the primary table key, it is used for optimized reads on sorted tables and hashed tables.

-   The differing behavior of the specified key outside and inside the functions [line\_exists](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenline_exists_function.htm) and [line\_index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenline_index_function.htm) is explained as follows:

-   Outside the functions, the main purpose of an explicitly specified table key is to read exactly one completely specified line.

-   Within the functions, the existence of a specified line that is not necessarily specified completely or, for example, a line number as the starting point of a subsequent sequential read using [LOOP ... FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_cond.htm) is to be determined as efficiently as possible.

Example

Reading of a line in an internal table by specifying the primary table key.

DATA itab TYPE SORTED TABLE OF spfli
          WITH UNIQUE KEY carrid connid.
SELECT \*
       FROM spfli
       INTO TABLE @itab.
TRY.
    cl\_demo\_output=>display( itab\[ KEY primary\_key
                                       carrid = '...'
                                       connid = '...' \]  ).
  CATCH cx\_sy\_itab\_line\_not\_found.
    ...
ENDTRY.

Continue
![Example](exa.gif "Example") [table\_exp - Line Specification](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_exp_itab_line_abexa.htm)