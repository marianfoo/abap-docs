  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_objects.htm) → 

CREATE OBJECT

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_shortref.htm)

Syntax Forms

[Defining a Class Implicitly](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_implicit.htm)
1\. CREATE OBJECT oref *\[* [area\_handle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_area_handle.htm)*\]* *\[* [parameter\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_parameters.htm)*\]*.
[Defining a Class Explicitly](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_explicit.htm)
2\. CREATE OBJECT oref *\[* [area\_handle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_area_handle.htm)*\]*
                     TYPE *{* class  *\[*[parameter\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_parameters.htm)*\]* *}*
                        *|* *{* (name) *\[* [parameter\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_parameters.htm)*|* [parameter\_tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_para_tables.htm)*\]* *}*.

Effect

The statement CREATE OBJECT creates an instance of a class or object and assigns the object reference to the reference variable oref. The instance constructor of the class is called directly after the object is created.

By default, the object is created in the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") (or [heap](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheap_glosry.htm "Glossary Entry")) of the current program and remains there for as long as it is required. If no more [heap references](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheap_reference_glosry.htm "Glossary Entry") point to the object, the following applies:

-   No more object references point to the object.
    
-   no data reference can no field symbol points to an instance attribute or to a part of an instance attribute,
    

Also, if no more methods of the object are registered as event handlers, the object is deleted by the [garbage collector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengarbage_collector_glosry.htm "Glossary Entry"). The addition [area\_handle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_area_handle.htm) can be used to create the object as a [shared object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshared_object_glosry.htm "Glossary Entry").

The reference variable oref must be declared as an object reference variable. Instance components of an object created using CREATE OBJECT can only be accessed using object reference variables (see [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_data_objects.htm)).

The addition TYPE can be used to specify the class of the new object. The static type of the object reference variables must be more general than or identical to the class of the new object (in accordance with the rules for [Assignments Between Object Reference Variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_references_objects.htm)).

Instances of a class can be created only where permitted by the addition CREATE of the statement [CLASS DEFINITION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass.htm). The class can be a local class of the same ABAP program or a global class from the class library permitted by the package check.

The additions [parameter\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_parameters.htm) and [parameter\_tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_para_tables.htm) must be used to fill the non-optional input parameters of the first explicitly implemented instance constructor in the path of the inheritance tree between the instantiated class and the root class object. These additions can also be used to assign return values to the non-class-based exceptions of the instance constructor.

If a handleable exception is raised for the object in the runtime environment, the object is not created and the object reference variable oref is initialized. If a handleable exception is raised when the object is created in the instance constructor of the class, the object is deleted and the object reference variable oref is initialized.

Return Value
If the CREATE OBJECT statement is executed successfully, sy-subrc is set to 0. Values other than 0 can occur when specifying EXCEPTIONS in parameter\_spec when non-class-based exceptions of the instance constructor are handled.

Notes

-   If the reference variable oref specified after CREATE OBJECT is passed simultaneously to the instance constructor, it points to the new object when this constructor is executed. To pass a reference to an existing object to the instance constructor, a different reference variable needs to be used.
    
-   The statement CREATE OBJECT creates a [heap reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheap_reference_glosry.htm "Glossary Entry"). All references that point to the object or its parts are also heap references and keep the object alive. The same applies to field symbols that point to instance attributes or to their parts.
    
-   When a class is used, the [instance operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_new.htm) acts like the statement CREATE OBJECT oref TYPE class and can be used in [general expression positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").
    
-   The return code sy-subrc is set to 0 if the statement is successful because the instance constructor is called. sy-subrc is set each time a [method is called](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_static_short.htm).
    

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_CREATE\_OBJECT\_ERROR

-   Cause: An attempt was made to instantiate an abstract class.
    Runtime error: CREATE\_OBJECT\_CLASS\_ABSTRACT
    
-   Cause: The class specified in the addition TYPE does not exist.
    Runtime error: CREATE\_OBJECT\_CLASS\_NOT\_FOUND
    
-   Cause: The class specified dynamically in TYPE does not match the type of the reference variable.
    Runtime error: MOVE\_OREF\_NOT\_CONVERTIBLE
    
-   Cause: An attempt was made to instantiate a private class externally.
    Runtime error: CREATE\_OBJECT\_CREATE\_PRIVATE
    
-   Cause: An attempt was made to instantiate a protected class externally.
    Runtime error: CREATE\_OBJECT\_CREATE\_PROTECTED
    

Non-Handleable Exceptions

-   Cause: A reference must be specified as the target variable.
    Runtime error: CREATE\_OBJECT\_NO\_REFTYPE:
    

Continue
[CREATE OBJECT oref](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_implicit.htm)
[CREATE OBJECT - TYPE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_explicit.htm)
[CREATE OBJECT - AREA HANDLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_area_handle.htm)
[CREATE OBJECT - parameter\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_parameters.htm)
[CREATE OBJECT - parameter\_tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_para_tables.htm)