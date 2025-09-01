---
title: "Creating Objects and Values"
description: |
  This section describes how data objects and instances are created and values constructed. -   Creating Objects(#abencreate-objects-1--------constructing-values---@ITOC@@ABENCREATE_OBJECTS_2) Creating Objects Creating an object or data object is equivalent to the dynamic creation of an instance of
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_objects.htm"
abapFile: "abencreate_objects.htm"
keywords: ["delete", "do", "while", "if", "try", "method", "class", "data", "types", "internal-table", "abencreate", "objects"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) → 

Creating Objects and Values

This section describes how data objects and instances are created and values constructed.

-   [Creating Objects](#abencreate-objects-1--------constructing-values---@ITOC@@ABENCREATE_OBJECTS_2)

Creating Objects

Creating an object or data object is equivalent to the dynamic creation of an instance of a data type or a class. While instances of classes can only be created as described in this section, instances of data types (data objects) declared using the statement [DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata.htm), or related statements such as [CONSTANTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconstants.htm), are created automatically as named data objects when their [context](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontext_2_glosry.htm "Glossary Entry") is loaded into the internal session. Data objects only need to be created dynamically if the data type is made known for the first time when the program is executed, or if large amounts of memory are allocated only for short periods of time.

Dynamically created objects can only be addressed using reference variables, and can be deleted from the internal session by the [garbage collector](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengarbage_collector_glosry.htm "Glossary Entry") if they are no longer referenced.

Objects can be created using one of the following:

-   [CREATE DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data.htm)

-   [CREATE OBJECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_object.htm)

-   The [instance operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm) for creating objects in [general expression positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and in [functional operand positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_position_glosry.htm "Glossary Entry")

-   The addition NEW in the INTO clause of ABAP SQL for the implicit creation of data objects as target areas.

Data objects and objects are created by default in the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the current program, and only programs in the same internal session can access them. The following, however, can also be created:

-   [Shared objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shared_objects.htm) in the [shared memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshared_memory_glosry.htm "Glossary Entry")

-   [Parameters in the user memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmemory.htm)

Note

The use of the statement [ASSIGN LOCAL COPY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_local_copy.htm) to create objects is now obsolete.

Constructing Values

The attribute values of a new instance of a class can be constructed using the [instance constructor](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninstance_constructor_glosry.htm "Glossary Entry") of the class. The input parameters of the instance constructor can be filled using the EXPORTING addition of the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_object.htm) or using actual parameters for the instance operator [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm).

The values of dynamically created or statically declared data objects can be constructed using the following [constructor expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"):

-   When anonymous data objects are created dynamically using the instance operator [NEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm), values for all data types, particularly structured and tabular types, can be constructed and assigned to the new data object.

-   The [value operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_operator_glosry.htm "Glossary Entry") [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_value.htm) can also be used to construct the content of complex data objects (structures, internal tables). This goes beyond what is possible using the [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_options.htm) addition.

Note

Like any constructor expression, the value operator [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_value.htm) can be used in [general expression positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and in [functional operand positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_position_glosry.htm "Glossary Entry"), in particular on the right side of an assignment to an [inline declaration](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm).

Example

Inline declarations of a reference variable dref and a structured variable dobj. The instance operator NEW creates an anonymous data object, referenced by dref. Using functional method calls, the instance operator NEW and the value operator VALUE are used to construct and assign values for the components of the structures.

DATA(dref) = NEW struct( col1 = meth->get\_col1( )
                         col2 = meth->get\_col1( ) ).
DATA(dobj) = VALUE struct( col1 = meth->get\_col1( )
                           col2 = meth->get\_col1( ) ).

Continue
[CREATE DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data.htm)
[CREATE OBJECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_object.htm)
[NEW - Instance Operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_new.htm)
[VALUE - Value Operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_value.htm)
[Shared Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shared_objects.htm)
[Parameters in the User Memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmemory.htm)