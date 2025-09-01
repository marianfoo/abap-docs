  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning References](javascript:call_link\('abenreference_assignments.htm'\)) → 

Setting Reference Variables

Special rules apply when setting the reference or pointer of a reference variable:

-   [Assignment Rules for Reference Variables](javascript:call_link\('abenconversion_references.htm'\))

A reference is always set as an [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") or as a [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry"). When a reference variable is assigned to another reference variable, two different assignment operators are used plus a constructor operator.

-   [\=, ?= - UP Cast and Down Cast](javascript:call_link\('abapmove_cast.htm'\))

-   [CAST - Casting Operator](javascript:call_link\('abenconstructor_expression_cast.htm'\))

References in data reference variables can point to existing data objects. Here, a statement and a constructor operator are used.

-   [GET REFERENCE](javascript:call_link\('abapget_reference.htm'\))

-   [REF - Reference Operator](javascript:call_link\('abenconstructor_expression_ref.htm'\))

Like all data objects, reference variables are initialized using the statement [CLEAR](javascript:call_link\('abapclear.htm'\)). The content of an initial reference variable is the [null reference](javascript:call_link\('abennull_reference_glosry.htm'\) "Glossary Entry"), which does not point to an object and can be assigned to every reference variable.　

Notes

-   The same rules apply to references set when [objects are created](javascript:call_link\('abencreate_objects.htm'\)) as to assignments.

-   When a reference variable containing a [heap reference](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") is initialized, this affects [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry").

Continue
[Assignment Rules for Reference Variables](javascript:call_link\('abenconversion_references.htm'\))
[\=, ?= - Up Cast and Down Cast](javascript:call_link\('abapmove_cast.htm'\))
[CAST - Casting Operator](javascript:call_link\('abenconstructor_expression_cast.htm'\))
[GET REFERENCE](javascript:call_link\('abapget_reference.htm'\))
[REF - Reference Operator](javascript:call_link\('abenconstructor_expression_ref.htm'\))