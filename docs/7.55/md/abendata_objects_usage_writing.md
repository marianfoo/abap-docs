  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) → 

Write Positions

At a write position, the content of an operand is changed when the statement is executed. Only modifiable data objects (that is, no literals, text symbols, constants, or non-modifiable formal parameters) can be specified as follows at write positions:

-   Specification of a [visible data object](javascript:call_link\('abenlifetime_and_visibility.htm'\)) specified at this position using the identifier dobj, a field symbol <fs>, or a dereferenced data reference dref->\* if dref is typed completely. Like in [read positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry"), \[\] can be appended to internal tables to address the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry").

-   Specification of a [subarea](javascript:call_link\('abenoffset_length.htm'\)) of a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like or byte-like data object using an [offset/length](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry") specification. An offset or length specification can not be made in write positions for data objects of the [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types string and xstring.

-   At a [declaration position](javascript:call_link\('abendeclaration_position_glosry.htm'\) "Glossary Entry"), an [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") of a data object or field symbol can be made using a [declaration expression](javascript:call_link\('abendeclaration_expression_glosry.htm'\) "Glossary Entry").

-   [Writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") can be listed in a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry").

There are write-only positions, where an operand is overwritten without being read first, and write positions where an operand is read and written are both available.

Hints

-   In [some write positions](javascript:call_link\('abenexpression_positions_write.htm'\)), certain expressions can also be specified.

-   [Enumerated variables](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") can only be used in write positions where the operand type is the enumerated type and only the associated [enumerated values](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") can be written.