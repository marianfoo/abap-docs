  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) →  [Enhancements Using BAdIs](javascript:call_link\('abenbadi_enhancement.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20BADI%2C%20ABAPCALL_BADI%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CALL BADI

[Short Reference](javascript:call_link\('abapcall_badi_shortref.htm'\))

Syntax

CALL BADI *{* badi->meth [parameter\_list](javascript:call_link\('abapcall_method_parameters.htm'\)) *}*
        *|* *{* badi->(meth\_name) *{*[parameter\_list](javascript:call_link\('abapcall_method_parameters.htm'\))
                              *|* [parameter\_tables](javascript:call_link\('abapcall_method_parameter_tables.htm'\))*}* *}*.

Effect

Calls a [BAdI method](javascript:call_link\('abenbadi_method_glosry.htm'\) "Glossary Entry"). The statement has a static and a dynamic variant. In both variants, a [BAdI reference variable](javascript:call_link\('abenbadi_reference_variable_glosry.htm'\) "Glossary Entry") must be specified for badi.

-   In the static variant, a [BAdI reference variable](javascript:call_link\('abenbadi_reference_variable_glosry.htm'\) "Glossary Entry") of the static type of a concrete [BAdI class](javascript:call_link\('abenbadi_class_glosry.htm'\) "Glossary Entry") must be specified for badi, and for meth a BAdI method of the corresponding [BAdI](javascript:call_link\('abenbadi_glosry.htm'\) "Glossary Entry") must be specified directly.
-   In the dynamic variant, a [BAdI reference variable](javascript:call_link\('abenbadi_reference_variable_glosry.htm'\) "Glossary Entry") of the static type of the abstract superclass CL\_BADI\_BASE must be specified for badi. For meth\_name, a character-like data object must be specified that must contain the name of a BAdI method in uppercase letters when the statement is executed.

With respect to the addressing of BAdI methods, the BAdI reference variable behaves statically as well as dynamically like an [interface reference variable](javascript:call_link\('abeninterface_ref_variable_glosry.htm'\) "Glossary Entry") with the static type of the affected [BAdI interface](javascript:call_link\('abenbadi_interface_glosry.htm'\) "Glossary Entry"). A BAdI method that is declared as a component of the corresponding BAdI interface is addressed directly using its name. BAdI methods declared in [component interfaces](javascript:call_link\('abencomponent_interface_glosry.htm'\) "Glossary Entry") of the BAdI interface can be addressed using the [interface component selector](javascript:call_link\('abeninterface_comp_selector_glosry.htm'\) "Glossary Entry") or any [alias names](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry").

The additions [parameter\_list](javascript:call_link\('abapcall_method_parameters.htm'\)) or [parameter\_tables](javascript:call_link\('abapcall_method_parameter_tables.htm'\)) assign actual parameters to the formal parameters of the BAdI method or handle non-class-based exceptions exactly as described in the [method call](javascript:call_link\('abenmethod_calls.htm'\)). The exceptions that can occur in dynamic accesses are also the same as those of [CALL METHOD](javascript:call_link\('abapcall_method_dynamic.htm'\)).

The statement CALL BADI calls the specified method in all [object plug-ins](javascript:call_link\('abenobject_plugin_glosry.htm'\) "Glossary Entry") to which the [BAdI object](javascript:call_link\('abenbadi_object_glosry.htm'\) "Glossary Entry") referenced by the badi refers.

-   If the BAdI is defined for single use, badi must contain a valid [BAdI reference](javascript:call_link\('abenbadi_reference_glosry.htm'\) "Glossary Entry") for a static BAdI call. If badi is initial, a catchable exception is raised.
-   If the BAdI is defined for multiple use, badi must contain a valid [BAdI reference](javascript:call_link\('abenbadi_reference_glosry.htm'\) "Glossary Entry") for a static BAdI call or can be initial. If the referenced BAdI object refers to multiple object plug-ins, the call order is the same for every CALL BADI statement. The exact call order can be determined in the definition of the associated [BAdI implementations](javascript:call_link\('abenbadi_implementation_glosry.htm'\) "Glossary Entry") if the predefined BAdI BADI\_SORTER of the identically named enhancement spot was implemented for the current BAdI. If the referenced BAdI object does not reference object plug-ins, or the badi is initial, the statement has no effect.
-   In a dynamic BAdI call, a catchable exception is always raised if there is an invalid BAdI reference in badi.

If a method is added to a BAdI afterwards, it may be missing in a BAdI implementation. In this case the call is executed as if the method existed with an empty implementation. Actual parameters that are bound to EXPORTING or RETURNING parameters passed by value are initialized. All other actual parameters remain unchanged.

System Fields

With a regular method call, the system field sy-subrc is either set to 0 or, when handling non-class-based exceptions, it is set to the value specified after EXCEPTIONS.

Hints

-   BAdI objects and BAdI references can only be created using the statement [GET BADI](javascript:call_link\('abapget_badi.htm'\)).
-   The call of a BAdI method of a BAdI defined for single use behaves like a method call with meth( ...): the called method must exist. In contrast, calls of a BAdI method defined for multiple use are more like raising an event using RAISE EVENT: One or more methods can exist, or no methods at all.
-   The addition [DEFAULT](javascript:call_link\('abapmethods_default.htm'\)) can be used when defining a BAdI method in a BAdI interface to define the behavior for methods that are not implemented.
-   In the terminology of the [ABAP Enhancement Framework](javascript:call_link\('abenenhancement_framework_glosry.htm'\) "Glossary Entry"), the statement CALL BADI is known as an [enhancement spot element call](javascript:call_link\('abenenhancement_spot_invoc_glosry.htm'\) "Glossary Entry").

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_BADI\_INITIAL\_REFERENCE

-   Cause: The reference variable badi is initial either for the static call, although the BAdI was defined for single use, or for the dynamic call.

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

-   Cause: Method does not exist at the dynamic call
    Runtime error: DYN\_CALL\_METH\_NOT\_FOUND