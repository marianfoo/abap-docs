  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

ABAP Objects - Further Developments in Release 4.6A

In Release 4.6A the following components are added to the core ABAP Objects functions:

[1\. Creating objects with explicitly specified class](#!ABAP_MODIFICATION_1@1@)

[2\. Non-public instantiation](#!ABAP_MODIFICATION_2@2@)

[3\. Internal tables as collections](#!ABAP_MODIFICATION_3@3@)

[4\. Functional methods in expressions](#!ABAP_MODIFICATION_4@4@)

[5\. Instance destroyer](#!ABAP_MODIFICATION_5@5@)

[6\. Change process for global interfaces](#!ABAP_MODIFICATION_6@6@)

[7\. Compiler enhancements](#!ABAP_MODIFICATION_7@7@)

[8\. Internal optimizations](#!ABAP_MODIFICATION_8@8@)

Modification 1

Creating Objects with Explicitly Specified Class
The statement [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) has two new variants that make it possible to specify the name of the class where the instance is created, both statically and dynamically. Previously, a reference variable with reference to the class had to be created before an object could be created. In the new variants of the statement CREATE OBJECT, any reference variables can be used that are compatible with the specified class.

Modification 2

Non-Public Instantiation
The new additions CREATE PROTECTED and CREATE PRIVATE of the statement [CLASS class DEFINITION](javascript:call_link\('abapclass.htm'\)) can be used to ensure that only the class itself or its subclasses can create instances of the class class. This makes instance management non-ambiguous.

Modification 3

Internal Tables as Collections
If the row type of internal tables contains reference variables as components comp, the attributes attr of the object to which the reference of a row points can be used as key values for reading, sorting, and changing table rows. This is possible in the following statements:

-   LOOP AT itab ... WHERE comp->attr ...
    
-   READ TABLE itab ... WITH *\[*TABLE*\]* KEY comp->attr = ...
    
-   SORT itab BY comp->attr ...
    
-   DELETE itab WHERE comp->attr ...
    
-   MODIFY itab ... TRANSPORTING ... WHERE comp->attr ...
    

If a table contains non-structured rows of the type of a reference variable, the attributes of the object to which a row points can be addressed using table\_line\->attr.

Modification 4

[Functional Methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry") in Expressions
Functional method calls are supported for the following statements and expressions:

-   In arithmetic expressions (COMPUTE)
    
-   In bit expressions (COMPUTE)
    
-   In relational expressions
    
-   In multiple queries (CASE, WHEN)
    
-   In loops (LOOP)
    
-   In assignments (\=)
    

Modification 5

Instance Destroyer

The instance destroyer can be used for releasing internal and external resources. External resources, for example the printer of a called class, must be released by the application involved, whereas internal resources are released automatically when the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is closed. Currently a C function must be called for this purpose using SYSTEM-CALL.

Modification 6

Change Process for Global Interfaces

If a method is missing in the implementation, the syntax check produces a warning message instead of an error message. If the method is called at runtime, it is canceled.

If an implemented method is not used, a warning message is produced instead of an error message. The code of the method is ignored.

Modification 7

Compiler Enhancements

The statement [CLASS class DEFINITION LOAD](javascript:call_link\('abapclass_deferred.htm'\)) is no longer required with the following statements:

-   CALL METHOD global\_class=>method
    
-   SET HANDLER global\_class=>method
    
-   METHODS m FOR EVENT e OF CLASS global\_class
    

From within a global superclass, a subclass can be referenced provided that the superclass does not address components of the subclass.

Modification 8

Internal Optimizations

1.  Objects are now addressed indirectly using indexes instead of pointers. This makes the ABAP data layout platform-independent. In addition, this ensures object mobility as a basis for future developments such as:
    
2.  \- Integrated persistence services
    
3.  \- Shared memory objects
    
4.  \-Destroy for objects
    
5.  \- More compact memory management
    
6.  Improved memory management is achieved because objects are managed without blocks. In addition, objects can be released individually.
    
7.  [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry") uses mark & sweep instead of reference counting, which enables cycles to be detected. This provides efficient support for the debugger in finding all references to a specific object.
    
8.  Finally, a separate interface load has been introduced to relieve the load of the implementing classes from some of its tasks.