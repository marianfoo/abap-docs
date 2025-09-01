  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_framework.htm) →  [Enhancements Using BAdIs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbadi_enhancement.htm) → 

CALL BADI

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_badi_shortref.htm)

Syntax

CALL BADI *{* badi->meth [parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_parameters.htm) *}*
        *|* *{* badi->(meth\_name) *{*[parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_parameters.htm)
                              *|* [parameter\_tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_parameter_tables.htm)*}* *}*.

Effect

Calls a [BAdI method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbadi_method_glosry.htm "Glossary Entry"). The statement has a static and a dynamic variant. In both variants, a [BAdI reference variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbadi_reference_variable_glosry.htm "Glossary Entry") must be specified for badi.

-   In the static variant, a [BAdI reference variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbadi_reference_variable_glosry.htm "Glossary Entry") of the static type of a concrete [BAdI class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbadi_class_glosry.htm "Glossary Entry") must be specified for badi, and for meth a BAdI method of the corresponding [BAdI](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbadi_glosry.htm "Glossary Entry") must be specified directly.
-   In the dynamic variant, a [BAdI reference variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbadi_reference_variable_glosry.htm "Glossary Entry") of the static type of the abstract superclass CL\_BADI\_BASE must be specified for badi. For meth\_name, a character-like data object must be specified that must contain the name of a BAdI method in uppercase letters when the statement is executed.

With respect to the addressing of BAdI methods, the BAdI reference variable behaves statically as well as dynamically like an [interface reference variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninterface_ref_variable_glosry.htm "Glossary Entry") with the static type of the affected [BAdI interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbadi_interface_glosry.htm "Glossary Entry"). A BAdI method that is declared as a component of the corresponding BAdI interface is addressed directly using its name. BAdI methods declared in [component interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomponent_interface_glosry.htm "Glossary Entry") of the BAdI interface can be addressed using the [interface component selector](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninterface_comp_selector_glosry.htm "Glossary Entry") or any [alias names](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenalias_glosry.htm "Glossary Entry").

The additions [parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_parameters.htm) or [parameter\_tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_parameter_tables.htm) assign actual parameters to the formal parameters of the BAdI method or handle non-class-based exceptions exactly as described in the [method call](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmethod_calls.htm). The exceptions that can occur in dynamic accesses are also the same as those of [CALL METHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_dynamic.htm).

The statement CALL BADI calls the specified method in all [object plug-ins](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobject_plugin_glosry.htm "Glossary Entry") to which the [BAdI object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbadi_object_glosry.htm "Glossary Entry") referenced by the badi refers.

-   If the BAdI is defined for single use, badi must contain a valid [BAdI reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbadi_reference_glosry.htm "Glossary Entry") for a static BAdI call. If badi is initial, a catchable exception is raised.
-   If the BAdI is defined for multiple use, badi must contain a valid [BAdI reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbadi_reference_glosry.htm "Glossary Entry") for a static BAdI call or can be initial. If the referenced BAdI object refers to multiple object plug-ins ,the call order is the same for every CALL BADI statement. The exact call order can be determined in the definition of the associated [BAdI implementations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbadi_implementation_glosry.htm "Glossary Entry") if the predefined BAdI BADI\_SORTER of the identically named enhancement spot was implemented for the current BAdI. If the referenced BAdI object does not reference object plug-ins, or the badi is initial, the statement has no effect.
-   In a dynamic BAdI call, a catchable exception is always raised if there is an invalid BAdI reference in badi.

If a method is added to a BAdI afterwards, it may be missing in a BAdI implementation. In this case the call is executed as if the method existed with an empty implementation. Actual parameters that are bound to EXPORTING or RETURNING parameters passed by value are initialized. All other actual parameters remain unchanged.

System Fields

With a regular method call, the system field sy-subrc is either set to 0 or, when handling non-class-based exceptions, it is set to the value specified after EXCEPTIONS.

Hints

-   BAdI objects and BAdI references can only be created using the statement [GET BADI](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_badi.htm).
-   In the terminology of the [enhancement concept](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_concept_glosry.htm "Glossary Entry"), the statement CALL BADI is known as an [enhancement spot element call](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_spot_invoc_glosry.htm "Glossary Entry").
-   The call of a BAdI method of a BAdI defined for single use behaves like a method call with meth( ...): the called method must exist. In contrast, calls of a BAdI method defined for multiple use are more like raising an event using RAISE EVENT: One or more methods can exist, or no methods at all.
-   The addition [DEFAULT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_default.htm) can be used when defining a BAdI method in a BAdI interface to define the behavior for methods that are not implemented.

[Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_BADI\_INITIAL\_REFERENCE

-   Cause: The reference variable badi is initial either for the static call, although the BAdI was defined for single use, or for the dynamic call.

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

-   Cause: Method does not exist at the dynamic call
    Runtime error: DYN\_CALL\_METH\_NOT\_FOUND