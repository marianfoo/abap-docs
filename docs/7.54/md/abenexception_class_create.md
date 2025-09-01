  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [Exception Classes](javascript:call_link\('abenexceptions_classes.htm'\)) → 

Creating Exception Classes

Exception classes can be defined globally in [Class Builder](javascript:call_link\('abenclass_library_glosry.htm'\) "Glossary Entry") or locally in a program. The names of global exception classes are prefixed with CX\_ or, in the case of exception classes created in customer systems, YCX\_ or ZCX\_. There is a set of predefined global exception classes, such as those prefixed with CX\_SY\_, whose exceptions are raised in exception situations in the runtime environment.

All exception classes inherit the following instance methods from CX\_ROOT:

-   GET\_TEXT and GET\_LONGTEXT return the [exception text](javascript:call_link\('abenexception_texts.htm'\)) (short text and long text) as return values of type string. These methods are defined in the interface IF\_MESSAGE implemented in CX\_ROOT and can be addressed using the identically named alias name for the class.

-   GET\_SOURCE\_POSITION returns the program name, the name of the [include program](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") if applicable, and the line number of the statement that raised the exception.

All exception classes inherit the following instance attributes from CX\_ROOT:

-   TEXTID of type SCX\_T100KEY for a key for the database table T100 or of the type SOTR\_CONC for a key for OTR (Online Text Repository) (that defines the [exception text](javascript:call_link\('abenexception_texts.htm'\))). This is normally set by the constructor and evaluated using GET\_TEXT.

-   PREVIOUS of reference type CX\_ROOT, which can contain a reference to a previous exception. This is normally set by the constructor.

-   IS\_RESUMABLE of type ABAP\_BOOL. For exceptions that are raised with the statement [RAISE RESUMABLE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)), the attribute is set to the value "X" in a [CATCH](javascript:call_link\('abapcatch_try.htm'\)) block with the addition BEFORE UNWIND. This shows (in this block) whether the exception can be [resumed](javascript:call_link\('abenresumable_exception_glosry.htm'\) "Glossary Entry"), that is, whether it is possible to leave a CATCH block with [RESUME](javascript:call_link\('abapresume.htm'\)). The attribute is not set if a CATCH block does not have the addition BEFORE UNWIND. In other CATCH blocks, in CLEANUP blocks, or after TRY, the value of IS\_RESUMABLE is undefined.

For global exception classes, Class Builder generates a non-modifiable instance constructor that has optional input parameters for all non-private attributes and that sets these attributes to the value of the input parameters. The ID of the required exception text can be passed to TEXTID. In the case of local exception classes, there are no special rules for the instance constructor.

Notes

-   Instances of exception classes are generally created when exceptions are raised, but can also be instantiated using [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)).

-   The instance constructor of an exception class should not raise any exceptions. However, if an exception is raised in the instance constructor after an exception was raised during instantiation of the exception class, and the exception cannot be handled there, this or (if propagation is unsuccessful) the exception CX\_SY\_NO\_HANDLER replaces the exception originally raised.

-   Additional methods and attributes can be defined in exception classes, for example to transport additional information about an error situation to the handler. The user-defined attributes should be read-only (READ-ONLY).