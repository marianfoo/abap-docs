# ABAP - Keyword Documentation / ABAP - Programming Language / Creating Objects and Values / CREATE OBJECT

Included pages: 8



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abapcreate_object.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object.htm)
- [abapcreate_object_implicit.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_implicit.htm)
- [abapcreate_object_explicit.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_explicit.htm)
- [abapcreate_object_area_handle.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_area_handle.htm)
- [abencreate_shared_object_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencreate_shared_object_abexa.htm)
- [abapcreate_object_parameters.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_parameters.htm)
- [abapcreate_object_para_tables.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_para_tables.htm)

**Bundle Contains**: 7 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.728Z

---

### abapcreate_object.htm

> **📖 Official SAP Documentation**: [abapcreate_object.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) → 

CREATE OBJECT

[Short Reference](javascript:call_link\('abapcreate_object_shortref.htm'\))

Syntax Forms

[Defining a Class Implicitly](javascript:call_link\('abapcreate_object_implicit.htm'\))
1\. CREATE OBJECT oref *\[* [area\_handle](javascript:call_link\('abapcreate_object_area_handle.htm'\))*\]* *\[* [parameter\_list](javascript:call_link\('abapcreate_object_parameters.htm'\))*\]*.
[Defining a Class Explicitly](javascript:call_link\('abapcreate_object_explicit.htm'\))
2\. CREATE OBJECT oref *\[* [area\_handle](javascript:call_link\('abapcreate_object_area_handle.htm'\))*\]*
                     TYPE *{* class *\[* [parameter\_list](javascript:call_link\('abapcreate_object_parameters.htm'\))*\]* *}*
                        *|* *{* (name) *\[* [parameter\_list](javascript:call_link\('abapcreate_object_parameters.htm'\))*|* [parameter\_tables](javascript:call_link\('abapcreate_object_para_tables.htm'\))*\]* *}*.

Effect

The statement CREATE OBJECT creates an instance of a class or an object and assigns the reference to the object of the reference variable oref. The instance constructor of the class is called directly after the object is created.

By default, the object is created in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") (or [heap](javascript:call_link\('abenheap_glosry.htm'\) "Glossary Entry")) of the current program and is preserved there for as long as it is required. If no more [heap references](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") point to the object, the following applies:

-   No more object references point to the object.

-   No data reference and no field symbol points to an instance attribute or to a part of an instance attribute,

Also, if no more methods of the object are registered as event handlers, it is deleted by the [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry"). The addition [area\_handle](javascript:call_link\('abapcreate_object_area_handle.htm'\)) can be used to create the object as a [shared object](javascript:call_link\('abenshared_object_glosry.htm'\) "Glossary Entry").

The reference variable oref must be declared as an object reference variable. Instance components of an object created using CREATE OBJECT can only be accessed using object reference variables (see [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\))).

The addition TYPE can be used to specify the class of the created object. The static type of the object reference variables must be more general than or identical to the class of the created object, in accordance with the rules for [Assignments Between Object Reference Variables](javascript:call_link\('abenconversion_references_objects.htm'\)).

Instances of a class can be created only where it is allowed by the addition CREATE of the statement [CLASS DEFINITION](javascript:call_link\('abapclass.htm'\)). It can be a local class of the same ABAP program or a global class of the class library allowed by the package check.

The additions [parameter\_list](javascript:call_link\('abapcreate_object_parameters.htm'\)) and [parameter\_tables](javascript:call_link\('abapcreate_object_para_tables.htm'\)) must be used to fill the non-optional input parameters of the first explicitly implemented instance constructor that is on the path of the inheritance tree between the instantiated class and the root class object. These additions can also be used to assign return values to the non-class-based exceptions of the instance constructor.

If a catchable exception is raised when the object is created in the runtime environment, the object is not created and the object reference variable oref is initialized. If a catchable exception is raised when the object is created in the instance constructor of the class, the created object is deleted and the object reference variable oref is initialized.

Return Code

If the CREATE OBJECT statement is executed successfully, sy-subrc is set to 0. Values other than 0 can occur when specifying EXCEPTIONS in parameter\_spec when non-class-based exceptions of the instance constructor are handled.

Hints

-   If the reference variable oref specified after CREATE OBJECT is passed simultaneously to the instance constructor, it already points to the new object when it is executed. To pass a reference to an existing object to the instance constructor, a different reference variable must be used.

-   The statement CREATE OBJECT creates a [heap reference](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry"). All references that point to the object or its parts are also heap references and keep the object alive. The same applies to field symbols that point to instance attributes or to their parts.

-   If a class is used, the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) acts like the statement CREATE OBJECT oref TYPE class and can be used in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

-   The return code sy-subrc is set to 0 if the statement is successful because the instance constructor is called. sy-subrc is set each time a [method is called](javascript:call_link\('abapcall_method_static_short.htm'\)).
    

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

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
    

Uncatchable Exceptions

-   Cause: A reference must be specified as the target variable.
    Runtime error: CREATE\_OBJECT\_NO\_REFTYPE:
    

Continue
[CREATE OBJECT oref](javascript:call_link\('abapcreate_object_implicit.htm'\))
[CREATE OBJECT, TYPE](javascript:call_link\('abapcreate_object_explicit.htm'\))
[CREATE OBJECT, AREA HANDLE](javascript:call_link\('abapcreate_object_area_handle.htm'\))
[CREATE OBJECT, parameter\_list](javascript:call_link\('abapcreate_object_parameters.htm'\))
[CREATE OBJECT, parameter\_tables](javascript:call_link\('abapcreate_object_para_tables.htm'\))



**📖 Source**: [abapcreate_object.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object.htm)

### abapcreate_object_implicit.htm

> **📖 Official SAP Documentation**: [abapcreate_object_implicit.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_implicit.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) → 

CREATE OBJECT oref

[Short Reference](javascript:call_link\('abapcreate_object_shortref.htm'\))

Syntax

CREATE OBJECT oref *\[* [area\_handle](javascript:call_link\('abapcreate_object_area_handle.htm'\))*\]* *\[* [parameter\_list](javascript:call_link\('abapcreate_object_parameters.htm'\))*\]*.

Effect

If the addition TYPE is not specified, the object reference variable oref must be a class reference variable. An instance of the class is created that is the static type of the object reference variable. The static type of the class reference variable must not be an [abstract](javascript:call_link\('abenabstract_glosry.htm'\) "Glossary Entry") class, and in particular not the root class object.

Hint

If the character # is used in an operand position with the operand type of a class reference variable, the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) works like the statement CREATE DATA dref.

Example

Creation of an instance of a class cls by implicitly referring to the static type of the reference variables.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    DATA attr type string VALUE 'Object'.
ENDCLASS.
DATA oref TYPE REF TO cls.
CREATE OBJECT oref.
cl\_demo\_output=>display( oref->attr ).



**📖 Source**: [abapcreate_object_implicit.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_implicit.htm)

### abapcreate_object_explicit.htm

> **📖 Official SAP Documentation**: [abapcreate_object_explicit.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_explicit.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) → 

CREATE OBJECT, TYPE

[Short Reference](javascript:call_link\('abapcreate_object_shortref.htm'\))

Syntax

CREATE OBJECT oref *\[*[area\_handle](javascript:call_link\('abapcreate_object_area_handle.htm'\))*\]*
                   TYPE *{* class  *\[*[parameter\_list](javascript:call_link\('abapcreate_object_parameters.htm'\))*\]* *}*
                      *|* *{* (name) *\[* [parameter\_list](javascript:call_link\('abapcreate_object_parameters.htm'\))*|* [parameter\_tables](javascript:call_link\('abapcreate_object_para_tables.htm'\))*\]* *}*.

Effect

Creation of an instance of an explicitly specified class. A [concrete](javascript:call_link\('abenconcrete_glosry.htm'\) "Glossary Entry") class that is more specific than or identical to the static type of the object reference variable oref can be specified. The reference variable oref can be a class reference variable or an interface reference variable. The name of the class can be specified as follows:

-   class

Direct static specification as class.

-   (name)

Specification as the content of a character-like data object name. The data object name must contain the name of the class in uppercase letters when the statement is executed. The class name in name can also be an [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry"). The following can be specified for name:

-   Literal or constant
    If the data object name is specified as a character literal or as a constant, it can be evaluated statically and the specified class is identified as the used object.

-   Variable
    If the data object name is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

When the statement is executed, name is not evaluated until runtime (in both cases).

The class must be usable at the current position:

-   The addition [CREATE](javascript:call_link\('abapclass_options.htm'\)) of the class definition must allow objects to be created.

-   The package check must allow an object of a global class to be created.

Hints

-   If the class is specified dynamically, the parameters can either be specified statically in [parameter\_list](javascript:call_link\('abapcreate_object_parameters.htm'\)) or dynamically in [parameter\_tables](javascript:call_link\('abapcreate_object_para_tables.htm'\)).

-   When a class is used, the [instance operator](javascript:call_link\('abeninstance_operator_glosry.htm'\) "Glossary Entry") [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) acts like the statement CREATE OBJECT oref TYPE class and can be used in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). The dynamic specification of name is not possible here.

Security Hint

Dynamic object creation can present a serious security risk if used incorrectly. Names of classes that are passed to a program from the outside must be checked thoroughly before being used in dynamic statements. The system class CL\_ABAP\_DYN\_PRG, for example, is used to do this. See [Dynamic Calls](javascript:call_link\('abendyn_call_scrty.htm'\)).

Example

Creation of an instance of a class cls using an explicit reference to the class. The static type of the reference variable is the root class object and is therefore more general than any other class. Components must be accessed dynamically or a cast must be performed as shown here.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    DATA attr TYPE string VALUE 'Object'.
ENDCLASS.
DATA oref TYPE REF TO object.
CREATE OBJECT oref TYPE cls.
cl\_demo\_output=>display( CAST cls( oref ) ).



**📖 Source**: [abapcreate_object_explicit.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_explicit.htm)

### abapcreate_object_area_handle.htm

> **📖 Official SAP Documentation**: [abapcreate_object_area_handle.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_area_handle.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) → 

CREATE OBJECT, AREA HANDLE

[Short Reference](javascript:call_link\('abapcreate_object_shortref.htm'\))

Syntax

CREATE OBJECT oref AREA HANDLE handle ...

Effect

This statement creates an object as a [shared object](javascript:call_link\('abenshared_object_glosry.htm'\) "Glossary Entry") in the [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") of the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry"), to which the [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") referenced by handle is bound. The implicitly or explicitly specified class must be defined as a [shared-memory-enabled class](javascript:call_link\('abenshm_class_glosry.htm'\) "Glossary Entry") using the addition [SHARED MEMORY ENABLED](javascript:call_link\('abapclass_options.htm'\)) of the statement [CLASS](javascript:call_link\('abapclass_definition.htm'\)).

For handle, an object reference variable whose static type is [CL\_ABAP\_MEMORY\_AREA](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)) or one of its subclasses ([area class](javascript:call_link\('abenarea_class_glosry.htm'\) "Glossary Entry")) must be specified. When the statement is executed, handle must point to an [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") and the area handle must be bound to an area instance version with a change lock. A reference like this can be created in one of the following ways:

-   By inheriting the return value of the methods [ATTACH\_FOR\_WRITE](javascript:call_link\('abenshm_area_class.htm'\)) or [ATTACH\_FOR\_UPDATE](javascript:call_link\('abenshm_area_class.htm'\)) of an area class created using transaction SHMA.
    

-   By inheriting the return value of the method [GET\_HANDLE\_BY\_...](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)) of any area class.
    

-   By inheriting the return value of the method [GET\_IMODE\_HANDLE](javascript:call_link\('abenshm_cl_imode_area.htm'\)) of the predefined class CL\_IMODE\_AREA.

The latter is a reference to an area handle for the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") and the statement CREATE OBJECT works in the same way as without the addition AREA HANDLE.

Hints

-   The only shared object that can be addressed from an ABAP program directly after a binding is made to an area instance version is the instance of the [area root class](javascript:call_link\('abenroot_data_class_glosry.htm'\) "Glossary Entry"). All other objects must be referenced in this instance.

-   The static attributes of a shared object are not created in the shared memory, but when the shared-memory-enabled class is loaded into the internal session of a program, as for every class. This means that they can exist multiple times and independently of one another in different programs.
    

Example

Creation of a shared object in an area instance version of the area CL\_DEMO\_AREA.

CLASS cls DEFINITION
          SHARED MEMORY ENABLED.
  ...
ENDCLASS.
DATA: root   TYPE REF TO cl\_demo\_root,
      handle TYPE REF TO cl\_demo\_area.
...
TRY.
    handle = cl\_demo\_area=>attach\_for\_write( ).
    CREATE OBJECT root AREA HANDLE handle.
    handle->set\_root( root ).
    CREATE OBJECT root->oref AREA HANDLE handle TYPE cls.
  CATCH cx\_shm\_attach\_error.
    ...
ENDTRY.
...

Executable Example

[Creating an Instance of a Class as a Shared Object](javascript:call_link\('abencreate_shared_object_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SHM\_WRONG\_HANDLE

-   Cause: The area handle does not hold any change locks.

CX\_SHM\_ALREADY\_DETACHED

-   Cause: The area handle is not bound to an area instance version.

CX\_SHM\_OUT\_OF\_MEMORY

-   Cause: There is not enough memory.

CX\_SHM\_OBJECT\_NOT\_SERIALIZABLE

-   Cause: In an area instance displaceable using backup and recovery, an attempt was made to create an object that cannot be serialized.
    

Continue
![Example](exa.gif "Example") [Creating an Instance of a Class as a Shared Object](javascript:call_link\('abencreate_shared_object_abexa.htm'\))



**📖 Source**: [abapcreate_object_area_handle.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_area_handle.htm)

### abencreate_shared_object_abexa.htm

> **📖 Official SAP Documentation**: [abencreate_shared_object_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencreate_shared_object_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) →  [CREATE OBJECT, AREA HANDLE](javascript:call_link\('abapcreate_object_area_handle.htm'\)) → 

Creating an Instance of a Class as a Shared Object

This example demonstrates how an object is created in an [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_create\_shared\_object.
CLASS class DEFINITION
            SHARED MEMORY ENABLED.
  PUBLIC SECTION.
    DATA attr TYPE string.
    METHODS set\_attr IMPORTING text TYPE string.
ENDCLASS.
CLASS class IMPLEMENTATION.
  METHOD set\_attr.
    attr = text.
  ENDMETHOD.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: handle TYPE REF TO cl\_demo\_area,
          root   TYPE REF TO cl\_demo\_root,
          exc    TYPE REF TO cx\_shm\_attach\_error,
          oref   TYPE REF TO class.
    TRY.
        handle = cl\_demo\_area=>attach\_for\_write( ).
        CREATE OBJECT root AREA HANDLE handle.
        handle->set\_root( root ).
        CREATE OBJECT root->oref AREA HANDLE handle TYPE class.
        oref ?= root->oref.
        oref->set\_attr( \`String in shared memory\` ).
        CLEAR oref.
        handle->detach\_commit( ).
      CATCH cx\_shm\_attach\_error INTO exc.
        cl\_demo\_output=>display\_text( exc->get\_text( ) ).
        LEAVE PROGRAM.
    ENDTRY.
    TRY.
        handle = cl\_demo\_area=>attach\_for\_read( ).
        oref ?= handle->root->oref.
        cl\_demo\_output=>display\_data( oref->attr ).
        CLEAR oref.
        handle->detach( ).
      CATCH cx\_shm\_attach\_error INTO exc.
        cl\_demo\_output=>display\_text( exc->get\_text( ) ).
        LEAVE PROGRAM.
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

If the addition AREA HANDLE is used, an instance of the local class class is created as a [shared object](javascript:call_link\('abenshared_object_glosry.htm'\) "Glossary Entry") in an [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") of the area CL\_DEMO\_AREA. The generically typed attribute oref of the [area root class](javascript:call_link\('abenroot_data_class_glosry.htm'\) "Glossary Entry") CL\_DEMO\_ROOT is used as a reference variable. The attribute attr of the object is given a value by calling its method set\_attr.

After write access has been completed using the method DETACH\_COMMIT, a read is performed to demonstrate how the objects in the shared memory are accessed. Such an access can also be made in another program, as long as the area instance version exists in the shared memory.



**📖 Source**: [abencreate_shared_object_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencreate_shared_object_abexa.htm)

### abapcreate_object_area_handle.htm

> **📖 Official SAP Documentation**: [abapcreate_object_area_handle.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_area_handle.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) → 

CREATE OBJECT, AREA HANDLE

[Short Reference](javascript:call_link\('abapcreate_object_shortref.htm'\))

Syntax

CREATE OBJECT oref AREA HANDLE handle ...

Effect

This statement creates an object as a [shared object](javascript:call_link\('abenshared_object_glosry.htm'\) "Glossary Entry") in the [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") of the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry"), to which the [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") referenced by handle is bound. The implicitly or explicitly specified class must be defined as a [shared-memory-enabled class](javascript:call_link\('abenshm_class_glosry.htm'\) "Glossary Entry") using the addition [SHARED MEMORY ENABLED](javascript:call_link\('abapclass_options.htm'\)) of the statement [CLASS](javascript:call_link\('abapclass_definition.htm'\)).

For handle, an object reference variable whose static type is [CL\_ABAP\_MEMORY\_AREA](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)) or one of its subclasses ([area class](javascript:call_link\('abenarea_class_glosry.htm'\) "Glossary Entry")) must be specified. When the statement is executed, handle must point to an [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") and the area handle must be bound to an area instance version with a change lock. A reference like this can be created in one of the following ways:

-   By inheriting the return value of the methods [ATTACH\_FOR\_WRITE](javascript:call_link\('abenshm_area_class.htm'\)) or [ATTACH\_FOR\_UPDATE](javascript:call_link\('abenshm_area_class.htm'\)) of an area class created using transaction SHMA.
    

-   By inheriting the return value of the method [GET\_HANDLE\_BY\_...](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)) of any area class.
    

-   By inheriting the return value of the method [GET\_IMODE\_HANDLE](javascript:call_link\('abenshm_cl_imode_area.htm'\)) of the predefined class CL\_IMODE\_AREA.

The latter is a reference to an area handle for the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") and the statement CREATE OBJECT works in the same way as without the addition AREA HANDLE.

Hints

-   The only shared object that can be addressed from an ABAP program directly after a binding is made to an area instance version is the instance of the [area root class](javascript:call_link\('abenroot_data_class_glosry.htm'\) "Glossary Entry"). All other objects must be referenced in this instance.

-   The static attributes of a shared object are not created in the shared memory, but when the shared-memory-enabled class is loaded into the internal session of a program, as for every class. This means that they can exist multiple times and independently of one another in different programs.
    

Example

Creation of a shared object in an area instance version of the area CL\_DEMO\_AREA.

CLASS cls DEFINITION
          SHARED MEMORY ENABLED.
  ...
ENDCLASS.
DATA: root   TYPE REF TO cl\_demo\_root,
      handle TYPE REF TO cl\_demo\_area.
...
TRY.
    handle = cl\_demo\_area=>attach\_for\_write( ).
    CREATE OBJECT root AREA HANDLE handle.
    handle->set\_root( root ).
    CREATE OBJECT root->oref AREA HANDLE handle TYPE cls.
  CATCH cx\_shm\_attach\_error.
    ...
ENDTRY.
...

Executable Example

[Creating an Instance of a Class as a Shared Object](javascript:call_link\('abencreate_shared_object_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SHM\_WRONG\_HANDLE

-   Cause: The area handle does not hold any change locks.

CX\_SHM\_ALREADY\_DETACHED

-   Cause: The area handle is not bound to an area instance version.

CX\_SHM\_OUT\_OF\_MEMORY

-   Cause: There is not enough memory.

CX\_SHM\_OBJECT\_NOT\_SERIALIZABLE

-   Cause: In an area instance displaceable using backup and recovery, an attempt was made to create an object that cannot be serialized.
    

Continue
![Example](exa.gif "Example") [Creating an Instance of a Class as a Shared Object](javascript:call_link\('abencreate_shared_object_abexa.htm'\))



**📖 Source**: [abapcreate_object_area_handle.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_area_handle.htm)

### abapcreate_object_parameters.htm

> **📖 Official SAP Documentation**: [abapcreate_object_parameters.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_parameters.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) → 

CREATE OBJECT, parameter\_list

[Short Reference](javascript:call_link\('abapcreate_object_shortref.htm'\))

Syntax

... *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
    *\[*EXCEPTIONS exc1 = n1 exc2 = n2 ... *\[*OTHERS = n\_others*\]**\]*.

Effect

The additions EXPORTING and EXCEPTIONS are used to pass actual parameters to the instance constructor statically or to assign return values to non-class-based exceptions.

-   The addition EXPORTING must be used to supply the non-optional input parameters p1 p2 ... of the instance constructor of the instantiated class with the type-compliant actual parameters a1 a2 .... The other input parameters are optional. As in regular method calls, a1, a2, ... are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). This means that functions and expressions can be passed as actual parameters in addition to data objects. [Special rules](javascript:call_link\('abentyping_arith_expr.htm'\)) apply in this case. If a subclass does not have an instance constructor implemented explicitly, the interface of the instance constructor from the next-highest superclass that explicitly implements the instance constructor is filled.

-   The addition EXCEPTIONS can be used to assign return values to [non-class-based exceptions](javascript:call_link\('abenexceptions_non_class.htm'\)) exc1 exc2...

The syntax and semantics are the same as in the parameter list for [static method calls](javascript:call_link\('abenmethod_calls_static.htm'\)).

Example

Creation of a Control Framework (CFW) dialog box and passes input parameters to the instance constructor of the global class CL\_GUI\_DIALOGBOX\_CONTAINER. The class is defined implicitly using the static type of the reference variable dialog\_box.

DATA dialog\_box TYPE REF TO cl\_gui\_dialogbox\_container.
CREATE OBJECT dialog\_box
       EXPORTING parent = cl\_gui\_container=>desktop
                 width  = 1000
                 height = 350.



**📖 Source**: [abapcreate_object_parameters.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_parameters.htm)

### abapcreate_object_para_tables.htm

> **📖 Official SAP Documentation**: [abapcreate_object_para_tables.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_para_tables.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapcreate_object_para_tables.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_para_tables.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) → 

CREATE OBJECT, parameter\_tables

[Short Reference](javascript:call_link\('abapcreate_object_shortref.htm'\))

Syntax

... *\[*PARAMETER-TABLE ptab*\]*
    *\[*EXCEPTION-TABLE etab*\]*.

Effect

The additions PARAMETER-TABLE and EXCEPTION-TABLE are used to pass actual parameters dynamically to the instance constructor or assign return values to the non-class-based exceptions.

These additions can only be used if the instantiated class is specified dynamically in name. They use special internal tables ptab and etab to assign actual parameters to the input parameters of the instance constructor or return values to the non-class-based exceptions.

The syntax and semantics are the same as in the dynamic method calls using the statement [CALL METHOD](javascript:call_link\('abapcall_method_dynamic.htm'\)). The internal tables ptab and etab in particular must be defined with reference to the tables abap\_parmbind\_tab and abap\_excpbind\_tab from the [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") ABAP.

Example

Dynamic creation of a [Control Framework](javascript:call_link\('abencontrol_framework_glosry.htm'\) "Glossary Entry") (CFW) dialog box and dynamic passing of input parameters to the instance constructor of the global class CL\_GUI\_DIALOGBOX\_CONTAINER. The class is defined explicitly using the addition [TYPE](javascript:call_link\('abapcreate_object_explicit.htm'\)).

DATA: container TYPE REF TO cl\_gui\_container,
      exc\_ref TYPE REF TO cx\_root.
DATA: class TYPE string VALUE \`CL\_GUI\_DIALOGBOX\_CONTAINER\`,
      ptab TYPE abap\_parmbind\_tab.
ptab = VALUE #( ( name  = 'PARENT'
                  kind  = cl\_abap\_objectdescr=>exporting
                  value = REF #( cl\_gui\_container=>desktop ) )
                ( name  = 'WIDTH'
                  kind  = cl\_abap\_objectdescr=>exporting
                  value = REF #( 1000 ) )
                ( name  = 'HEIGHT'
                  kind  = cl\_abap\_objectdescr=>exporting
                  value = REF #( 300 ) ) ).
TRY.
    CREATE OBJECT container TYPE (class)
      PARAMETER-TABLE ptab.
  CATCH cx\_sy\_create\_object\_error INTO exc\_ref.
    MESSAGE exc\_ref->get\_text( ) TYPE 'I'.
ENDTRY.

Example

The following program section dynamically creates an object of a class SOME\_CLASS whose instance constructor expects a reference variable of the static type ANY\_CLASS. The program has correct syntax, but the object is created only in systems in which the classes also exist.

CONSTANTS:
  anycls  TYPE string VALUE \`ANY\_CLASS\`,
  somecls TYPE string VALUE \`SOME\_CLASS\`,
  param   TYPE string VALUE \`PARA\`.
DATA dref TYPE REF TO data.
TRY.
    CREATE DATA dref TYPE REF TO (anycls).
    ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).
    CREATE OBJECT <fs> TYPE (anycls).
  CATCH cx\_sy\_create\_data\_error
        cx\_sy\_create\_object\_error.
    ...
ENDTRY.
IF <fs> IS ASSIGNED.
  DATA(ptab) = VALUE abap\_parmbind\_tab(
    ( name  = param
      kind  = cl\_abap\_objectdescr=>exporting
      value =  REF #( <fs> ) ) ).
ENDIF.
DATA oref TYPE REF TO object.
TRY.
    CREATE OBJECT oref TYPE (somecls) PARAMETER-TABLE ptab.
  CATCH cx\_sy\_create\_object\_error
        cx\_sy\_dyn\_call\_parameter\_error INTO DATA(exc).
    ...
ENDTRY.
