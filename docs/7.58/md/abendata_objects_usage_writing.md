  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Objects%20in%20Write%20Positions%2C%20ABENDATA_OBJECTS_USAGE_WRITING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

Data Objects in Write Positions

Only modifiable data objects, that is, no literals, text symbols, constants, or non-modifiable formal parameters, can be specified as follows at [write positions](javascript:call_link\('abenwrite_position_glosry.htm'\) "Glossary Entry"):

-   Specification of a [visible data object](javascript:call_link\('abenlifetime_and_visibility.htm'\)) specified at this position using the identifier dobj, a field symbol <fs>, or a dereferenced data reference dref->\* if dref is typed completely. Like in [read positions](javascript:call_link\('abenread_position_glosry.htm'\) "Glossary Entry"), \[\] can be appended to internal tables to address the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry").
-   Specification of a [subarea](javascript:call_link\('abenoffset_length.htm'\)) of a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like or byte-like data object using an [offset/length](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry") specification. An offset or length specification cannot be made in write positions for data objects of the [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types string and xstring.
-   At a [declaration position](javascript:call_link\('abendeclaration_position_glosry.htm'\) "Glossary Entry"), an [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") of a data object or field symbol can be made using a [declaration expression](javascript:call_link\('abendeclaration_expression_glosry.htm'\) "Glossary Entry").
-   [Writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") can be listed in a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry").

The following write positions can be distinguished:

-   [Read/write positions](javascript:call_link\('abenread_write_position_glosry.htm'\) "Glossary Entry"), where an operand is first read and then written.
-   [Write-only positions](javascript:call_link\('abenwrite_only_position_glosry.htm'\) "Glossary Entry"), where an operand is overwritten without being read first. For the time being, those are [declaration positions](javascript:call_link\('abendeclaration_position_glosry.htm'\) "Glossary Entry") only.

Hints

-   In [result positions](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry"), certain [writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") can be specified.
-   [Enumerated variables](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") can only be used in write positions where the operand type is the enumerated type and only the associated [enumerated values](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") can be written.