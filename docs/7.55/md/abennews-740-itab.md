  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

Internal Tables in Release 7.40, SP02

[1\. Table expressions](#!ABAP_MODIFICATION_1@1@)
[2\. Built-in functions for internal tables](#!ABAP_MODIFICATION_2@2@)
[3\. Explicit definition of an empty key](#!ABAP_MODIFICATION_3@3@)
[4\. Table sharing for boxed components](#!ABAP_MODIFICATION_4@4@)
[5\. References in specified components](#!ABAP_MODIFICATION_5@5@)
[6\. WHERE condition optimized](#!ABAP_MODIFICATION_6@6@)
[7\. Expression for dynamic sorts](#!ABAP_MODIFICATION_7@7@)

Modification 1

Table Expressions

The new [table expressions](javascript:call_link\('abentable_expressions.htm'\)) permit reads to be performed on internal tables in operand positions.

Modification 2

Built-In Functions for Internal Tables

-   The [table function](javascript:call_link\('abentable_function_glosry.htm'\) "Glossary Entry") [line\_index](javascript:call_link\('abenline_index_function.htm'\)) can be used to identify a line number in an index of an internal table and use it in operand positions.

-   The [predicate function](javascript:call_link\('abenpredicate_function_glosry.htm'\) "Glossary Entry") [line\_exists](javascript:call_link\('abenline_exists_function.htm'\)) can be used to check the existence of table lines; the resulting truth value can then be used directly.
    

Modification 3

Explicit Definition of an Empty Key

The new addition [EMPTY KEY](javascript:call_link\('abaptypes_primary_key.htm'\)) of the statements [TYPES](javascript:call_link\('abaptypes_primary_key.htm'\)), [DATA](javascript:call_link\('abapdata_primary_key.htm'\)), and so on can be used to define an [empty table key](javascript:call_link\('abenitab_empty_key.htm'\)) explicitly for standard tables. Without this addition, empty table keys occur only if the [standard key](javascript:call_link\('abenitab_standard_key.htm'\)) of a standard table does not contain any components suitable as key fields.

Modification 4

Table Sharing for Boxed Components

Until now there was no [table sharing](javascript:call_link\('abentable_sharing_glosry.htm'\) "Glossary Entry") if the line types contained [boxed components](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry"). This restriction has now been lifted.

Modification 5

References in Dynamically Specified Components

Object component selectors can now be specified when [components are specified](javascript:call_link\('abenitab_components.htm'\)) dynamically (this was not previously the case). However, those specifications can be made that are statically possible. For example, when using ASSIGN attributes cannot be accessed that are not known statically. This is the case, for example, when using superclass references to access subclass components.

Modification 6

Optimization of the WHERE Condition

The rules described under [Optimization of the WHERE Condition](javascript:call_link\('abenitab_where_optimization.htm'\)) have been modified as follows:

-   Except in comparisons for equality, optimizations are now also performed for the [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry") [IS INITIAL](javascript:call_link\('abenlogexp_initial.htm'\)). This enables a simple check to be made on the initial value, in particular for columns typed as [reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry"). A static WHERE condition cannot contain any duplicate or overlapping specified keys, if the prerequisites for optimizations are met. This means that this change is occasionally incompatible: Syntax errors are now produced in those WHERE conditions in which a key column is checked using both a comparison for equality with one value and using IS INITIAL.

-   Syntax warnings are no longer produced by mistake for non-optimizable type combinations in comparisons, even if the comparison does not contain any key columns. Non-optimizable type combinations now produce syntax warnings only if they actually modify key fields of a hash key or of the initial part of a sorted key. The syntax warnings have been improved so that the non-optimizable combination is mentioned in the text.

-   The following type combinations were not previously detected as non-optimizable when secondary keys were used in comparisons:

-   string with n, i (b, s), f, decfloat16, and decfloat34

-   xstring with c and string

There was no syntax error or exception in these cases. Instead, all lines of the internal table were checked linearly when the statement was executed or reads performed using the primary key. Optimized reads are guaranteed when using secondary keys, which is why the combinations above now produce syntax errors or raise exceptions. This represents an incompatible change.

Modification 7

Expression for Dynamic Sorts

In the statement [SORT itab](javascript:call_link\('abapsort_itab.htm'\)), the table (otab) can now be specified for dynamic sorts as the result of an expression or functional method call.