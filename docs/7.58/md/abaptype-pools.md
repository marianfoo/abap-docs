  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Declaration and Loading](javascript:call_link\('abenaddress_obsolet.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPE-POOLS%2C%20ABAPTYPE-POOLS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPE-POOLS

[Short Reference](javascript:call_link\('abaptype-pools_shortref.htm'\))

Obsolete Syntax

TYPE-POOLS tpool.

Effect

This statement is obsolete. It is checked for correct syntax but otherwise ignored by the ABAP Compiler.

The statement TYPE-POOLS was required in the past to load the elements of a [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") tpool explicitly in the current context. It could be specified for the global data declaration of an ABAP program or in the declaration part of a class or an interface.

Now a type pool is loaded automatically when one of its elements is first accessed in a program.

Hints

-   After a type pool is loaded, the data types declared there hide identically named data types in the ABAP Dictionary which are not declared in the type pool. Previously, the pool was loaded explicitly using TYPE-POOLS. Since the statement TYPE-POOLS is no longer effective, regular data types from the ABAP Dictionary now hide identically named data types in a type pool until the type pool is loaded when accessing a non-hidden element. Creating identically named types in the ABAP Dictionary and in type pools has been forbidden for a long time however, so this situation should therefore no longer occur.
-   Previously, [macros](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") defined in type pools only hide identically named macros from the database table TRMAC once the type pool had been loaded explicitly using the statement TYPE-POOLS. Now macros defined in type pools always hide identically named macros from the database table TRMAC. Due to different naming conventions however, this situation should not occur.
-   The syntax check no longer checks whether the specified type pool tpool actually exists.
-   The statement TYPE-POOLS can still be used to migrate current programs to lower releases. Otherwise it can be deleted.