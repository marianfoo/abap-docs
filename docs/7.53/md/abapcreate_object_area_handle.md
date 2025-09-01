  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) → 

CREATE OBJECT - AREA HANDLE

[Quick Reference](javascript:call_link\('abapcreate_object_shortref.htm'\))

Syntax

CREATE OBJECT oref AREA HANDLE handle ...

Effect

This statement creates an object as a [shared object](javascript:call_link\('abenshared_object_glosry.htm'\) "Glossary Entry") in the [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") of the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry"), which is bound to the [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") referenced by handle. The implicitly or explicitly specified class must be defined as a [shared-memory-enabled class](javascript:call_link\('abendata_class_glosry.htm'\) "Glossary Entry") using the addition [SHARED MEMORY ENABLED](javascript:call_link\('abapclass_options.htm'\)) of the statement [CLASS](javascript:call_link\('abapclass_definition.htm'\)).

handle expects an object reference variable whose static type is [CL\_ABAP\_MEMORY\_AREA](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)) or one of its subclasses ([area class](javascript:call_link\('abenarea_class_glosry.htm'\) "Glossary Entry")). When the statement is executed, handle must point to an [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") and the area handle must be associated with an area instance version with a change lock. A reference like this can be created in one of the following ways:

-   By inheriting the return value of the methods [ATTACH\_FOR\_WRITE](javascript:call_link\('abenshm_area_class.htm'\)) or [ATTACH\_FOR\_UPDATE](javascript:call_link\('abenshm_area_class.htm'\)) of an area class created using transaction SHMA.
    
-   By inheriting the return value of the method [GET\_HANDLE\_BY\_...](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)) of any area class.
    
-   By inheriting the return value of the method [GET\_IMODE\_HANDLE](javascript:call_link\('abenshm_cl_imode_area.htm'\)) of the predefined class CL\_IMODE\_AREA.
    

The latter is a reference to an area handle for the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") and the statement CREATE OBJECT operates as if the addition AREA HANDLE were not specified.

Notes

-   The only shared object that can be addressed from an ABAP program directly after a binding is made to an area instance version is the instance of the [area root class](javascript:call_link\('abenroot_data_class_glosry.htm'\) "Glossary Entry"). All other objects have to be referenced in this instance.
    
-   The static attributes of a shared object are not created in the shared memory. Instead, they are created when the shared-memory-enabled class is loaded to the internal session of a program, as for every class. They can thus occur more than once and independently of one another in different programs.
    

Example

Creation of a shared object in an area instance version of area CL\_DEMO\_AREA.

CLASS cls DEFINITION
          SHARED MEMORY ENABLED.
  ...
ENDCLASS.
DATA: root   TYPE REF TO cl\_demo\_root,
      handle TYPE REF TO cl\_demo\_area.
...
handle = cl\_demo\_area=>attach\_for\_write( ).
CREATE OBJECT root AREA HANDLE handle.
handle->set\_root( root ).
CREATE OBJECT root->oref AREA HANDLE handle TYPE cls.
...

Executable Example

[Creating an Instance of a Class as a Shared Object](javascript:call_link\('abencreate_shared_object_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

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