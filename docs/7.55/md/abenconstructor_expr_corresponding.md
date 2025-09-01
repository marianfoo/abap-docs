  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) → 

CORRESPONDING, Component Operator

Syntax Forms

[Base Form](javascript:call_link\('abencorresponding_constr_arg_type.htm'\))
1\. ... *{* CORRESPONDING dtype*|*#( *\[*DEEP*\]*
                               *\[*BASE ( base )*\]*
                               struct*|**{*itab *\[* [duplicates](javascript:call_link\('abencorresponding_constr_dupl.htm'\))*\]**}* ) *}*
    *|* *{* CORRESPONDING dtype*|*#( *\[*BASE ( base )*\]*
                               struct*|**{*itab *\[* [duplicates](javascript:call_link\('abencorresponding_constr_dupl.htm'\))*\]**}*
                               [mapping](javascript:call_link\('abencorresponding_constr_mapping.htm'\)) ) *}* ...
[Lookup Table](javascript:call_link\('abencorresponding_constr_using.htm'\))
2\. ... CORRESPONDING type( itab FROM lookup\_tab
                               USING *\[*KEY key\_name*\]* s1 = t1 s2 = t2 ...
                               *\[*[mapping](javascript:call_link\('abencorresponding_constr_mapping.htm'\))*\]* ) ...

Effect

A [constructor expression](javascript:call_link\('abenconstructor_expressions.htm'\)) with the component operator CORRESPONDING creates a result of a data type specified using type.

-   In the [basic component](javascript:call_link\('abencorresponding_constr_arg_type.htm'\)), the components of a structured or tabular results are constructed from the components of a structured or tabular parameter struc or itab.

-   In the [variant with lookup table](javascript:call_link\('abencorresponding_constr_using.htm'\)), the components of an internal table itab and a lookup table lookup\_tab are combined to form a tabular result.

The following can be specified for type:

-   A [structured type](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry") or a [table type](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry").

-   The # character as a symbol for the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry"). This specification is only possible if the data type required in an operand position is unique and completely identifiable. The operand type must be a structure type or a table type. When a constructor expression is assigned to a field symbol or a formal parameter with a generic table type, the operand type can only be determined at runtime.

The operator creates structures or internal tables with the specified data type. The components or columns of the result are filled using assignments of components of the parameters specified in the parentheses. The assignments are made using identical names or mapping relationships in a [mapping rule](javascript:call_link\('abencorresponding_constr_mapping.htm'\)).

Executable Examples

[Assigning Components: Examples](javascript:call_link\('abencorresponding_abexas.htm'\))

Continue
[CORRESPONDING, Basic Form](javascript:call_link\('abencorresponding_constr_arg_type.htm'\))
[CORRESPONDING, Lookup Table](javascript:call_link\('abencorresponding_constr_using.htm'\))
[CORRESPONDING, mapping](javascript:call_link\('abencorresponding_constr_mapping.htm'\))
[CORRESPONDING, duplicates](javascript:call_link\('abencorresponding_constr_dupl.htm'\))