  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_objects_oview.htm) → 

Classes

The type of an [object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobject_glosry.htm "Glossary Entry") is known as its class. A class is an abstract representation of an object. Alternatively, it can be viewed as a set of instructions for building an object. The attributes of objects are defined by the [components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_components.htm) of the class, which describe the state and behavior of objects.

Global Classes and Local Classes

Classes can be [defined](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_interface_definition.htm) globally in the [repository](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_glosry.htm "Glossary Entry")'s class library or locally in an ABAP program.

[Global classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenglobal_class_glosry.htm "Glossary Entry") are coded in a special ABAP program, a [class pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_pool_glosry.htm "Glossary Entry"), whereas [local classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlocal_class_glosry.htm "Glossary Entry") can be coded in almost every ABAP program. Global classes are visible in all ABAP programs. How they are used depends on the package check. Local classes can be used statically only in their own program. Dynamic access is also possible from other programs, although this is not recommended. When a global class is first used, the class pool is loaded to the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the consumer. The local classes of a class pool can be used by the global classes of the pool.

Except for the storage type and the visibility, there are hardly any conceptual differences between global and local classes. One of the few differences is that, in the public interface of a global class, only references to public types are possible. These types are subdivided into global and local [friends](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfriend_glosry.htm "Glossary Entry").

In principle, it also does not make any difference whether a method of a local class or a global class is called. This is the reason why classes used by multiple programs should be created exclusively in the class library. The reuse of local classes should be avoided by using [include programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninclude_program_glosry.htm "Glossary Entry").

Executable Example

[Classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_abexa.htm)

Continue
[Components of Classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_components.htm)