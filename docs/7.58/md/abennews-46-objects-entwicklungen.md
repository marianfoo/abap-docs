  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 4.xx](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-4.htm) →  [News for ABAP Release 4.6A](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-46a.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Further%20Developments%20in%20ABAP%20Release%204.6A%2C%20ABENNEWS-46-OBJECTS-ENTWICKLUNGEN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Further Developments in ABAP Release 4.6A

In Release 4.6A the following components are added to the core ABAP Objects functions:

[1\. Creating Objects with Explicitly Specified Class](#!ABAP_MODIFICATION_1@1@)
[2\. Non-Public Instantiation](#!ABAP_MODIFICATION_2@2@)
[3\. Internal Tables as Collections](#!ABAP_MODIFICATION_3@3@)
[4\. Functional Methods in Expressions](#!ABAP_MODIFICATION_4@4@)
[5\. C Destructor](#!ABAP_MODIFICATION_5@5@)
[6\. Change Process for Global Interfaces](#!ABAP_MODIFICATION_6@6@)
[7\. Compiler Enhancements](#!ABAP_MODIFICATION_7@7@)
[8\. Internal Optimizations](#!ABAP_MODIFICATION_8@8@)

Modification 1   

Creating Objects with Explicitly Specified Class

The statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object.htm) has two new variants that make it possible to specify the name of the class where the instance is created, both statically and dynamically. Previously, a reference variable with reference to the class had to be created before an object could be created. In the new variants of the statement CREATE OBJECT, any reference variables can be used that are compatible with the specified class.

Modification 2   

Non-Public Instantiation

The new additions CREATE PROTECTED and CREATE PRIVATE of the statement [CLASS class DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass.htm) can be used to ensure that only the class itself or its subclasses can create instances of the class class. This makes instance management non-ambiguous.

Modification 3   

Internal Tables as Collections

If the line type of internal tables contains reference variables as components comp, the attributes attr of the object to which the reference of a line points can be used as key values for reading, sorting, and changing table lines. This is possible in the following statements:

-   LOOP AT itab ... WHERE comp->attr ...
-   READ TABLE itab ... WITH *\[*TABLE*\]* KEY comp->attr = ...
-   SORT itab BY comp->attr ...
-   DELETE itab WHERE comp->attr ...
-   MODIFY itab ... TRANSPORTING ... WHERE comp->attr ...

If a table contains non-structured lines of the type of a reference variable, the attributes of the object to which a line points can be addressed using table\_line\->attr.

Modification 4   

Functional Methods in Expressions

[Functional method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm "Glossary Entry") calls are supported for the following statements and expressions:

-   In arithmetic expressions (COMPUTE)
-   In bit expressions (COMPUTE)
-   In relational expressions
-   In multiple queries (CASE, WHEN)
-   In loops (LOOP)
-   In assignments (\=)

Modification 5   

C Destructor

ABAP Objects does not support an instance destructor that can be implemented in ABAP. For special cases, and for internal use only, there is a destructor known as a [C destructor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc_destructor.htm).

Modification 6   

Change Process for Global Interfaces

If a method is missing in the implementation, the syntax check produces a warning message instead of an error message. If the method is called at runtime, it is canceled.

If an implemented method is not used, a warning message is produced instead of an error message. The code of the method is ignored.

Modification 7   

Compiler Enhancements

The statement [CLASS class DEFINITION LOAD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_deferred.htm) is no longer required with the following statements:

-   CALL METHOD global\_class=>method
-   SET HANDLER global\_class=>method
-   METHODS m FOR EVENT e OF CLASS global\_class

From within a global superclass, a subclass can be referenced provided that the superclass does not address components of the subclass.

Modification 8   

Internal Optimizations

The following improvements were made:

-   Objects are now addressed indirectly using indexes instead of pointers. This makes the ABAP data layout platform-independent. In addition, this ensures object mobility as a basis for future developments such as:
    -   Integrated persistence services
    -   Shared memory objects
    -   Destroy for objects
    -   More compact memory management
-   Improved memory management is achieved because objects are managed without blocks. In addition, objects can be released individually.
-   [Garbage Collector](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengarbage_collector_glosry.htm "Glossary Entry") uses mark & sweep instead of reference counting, which enables cycles to be detected. This provides efficient support for the debugger in finding all references to a specific object.
-   Finally, a separate interface load has been introduced to relieve the load of the implementing classes from some of its tasks.