  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) → 

Creating Objects and Values

This section describes how data objects and instances of classes are created and values constructed.

-   [Creating Objects](#abencreate-objects-1-------constructing-values---@ITOC@@ABENCREATE_OBJECTS_2)

Creating Objects

Creating an object or data object is equivalent to the dynamic creation of an instance of a data type or a class. While instances of classes can only be created as described in this section, instances of data types, that is data objects, declared using the statement [DATA](javascript:call_link\('abapdata.htm'\)), or related statements such as [CONSTANTS](javascript:call_link\('abapconstants.htm'\)), are created automatically as named data objects when their [context](javascript:call_link\('abenobj_context_glosry.htm'\) "Glossary Entry") is loaded into the internal session. Data objects only need to be created dynamically if the data type is only known when the program is executed, or if large amounts of memory are only to be used for short periods of time.

Dynamically created objects can only be addressed using reference variables and are deleted from the internal session by the [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry") if they are no longer referenced.

Objects can be created using one of the following:

-   [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\))
-   [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\))
-   The [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) for creating objects in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and [functional operand positions](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry")
-   The addition [NEW](javascript:call_link\('abapselect_into_target.htm'\)) in the INTO clause of ABAP SQL for the implicit creation of data objects as target areas.

Data objects and objects are created in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the current program by default, and only programs in the same internal session can access them. The following, however, can also be created:

-   [Shared objects](javascript:call_link\('abenabap_shared_objects.htm'\)) in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry")
-   [SPA/GPA parameters in the user memory](javascript:call_link\('abenspa_gpa.htm'\))

Hint

The statement [ASSIGN LOCAL COPY](javascript:call_link\('abapassign_local_copy.htm'\)) is used for an obsolete form of object creation.

Constructing Values

The attribute values of a newly created instance of a class can be constructed using the [instance constructor](javascript:call_link\('abeninstance_constructor_glosry.htm'\) "Glossary Entry") of the class. The input parameters of the instance constructor can be filled using the EXPORTING addition of the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) or using actual parameters for the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)).

The values of dynamically created or statically declared data objects can be constructed using the following [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"):

-   When anonymous data objects are created dynamically using the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)), values for all data types, particularly structured and tabular types, can be constructed and assigned to the created data object.
-   The [value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry") [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) can also be used to construct the content of complex data objects (structures, internal tables) and thus exceeds the functionality of the [VALUE](javascript:call_link\('abapdata_options.htm'\)) addition.

Hint

Like any constructor expression, the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) can be used in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and in [functional operand positions](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"), including particularly the right side of an assignment to an [inline declaration](javascript:call_link\('abendata_inline.htm'\)).

Example

Inline declarations of a reference variable dref and a structured variable dobj. The instance operator NEW creates an anonymous data object that is referred to by dref. Using functional method calls, the instance operator NEW and the value operator VALUE are used to construct and assign values for the components of the structures.

DATA(dref) = NEW struct( col1 = meth->get\_col1( )
                         col2 = meth->get\_col1( ) ).
DATA(dobj) = VALUE struct( col1 = meth->get\_col1( )
                           col2 = meth->get\_col1( ) ).

Continue
[CREATE DATA](javascript:call_link\('abapcreate_data.htm'\))
[CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\))
[NEW, Instance Operator](javascript:call_link\('abenconstructor_expression_new.htm'\))
[VALUE, Value Operator](javascript:call_link\('abenconstructor_expression_value.htm'\))
[Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\))
[SPA/GPA Parameters in the User Memory](javascript:call_link\('abenspa_gpa.htm'\))