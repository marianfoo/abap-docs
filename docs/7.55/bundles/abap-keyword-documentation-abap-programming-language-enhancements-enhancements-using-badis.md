# ABAP - Keyword Documentation / ABAP - Programming Language / Enhancements / Enhancements Using BAdIs

Included pages: 3


### abenbadi_enhancement.htm

---
title: "Enhancements Using BAdIs"
description: |
  BAdIs are part of the ABAP enhancement concept(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_concept_glosry.htm 'Glossary Entry'). They are created in Enhancement Builder(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_builder_glosry.htm 'G
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_enhancement.htm"
abapFile: "abenbadi_enhancement.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abenbadi", "enhancement"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_framework.htm) → 

Enhancements Using BAdIs

BAdIs are part of the [ABAP enhancement concept](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_concept_glosry.htm "Glossary Entry"). They are created in [Enhancement Builder](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_builder_glosry.htm "Glossary Entry"). BAdIs, together with their calling points in ABAP programs, form explicit [enhancement points](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_point_glosry.htm "Glossary Entry") of these programs and are assigned to [enhancement spots](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_spot_glosry.htm "Glossary Entry").

If BAdIs and their calling points are defined in a system, [enhancements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_glosry.htm "Glossary Entry") can be made in follow-on systems by creating [BAdI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_implementation_glosry.htm "Glossary Entry") implementations in these systems. A BAdI implementation consists mainly of a [BAdI implementation class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_implement_class_glosry.htm "Glossary Entry") whose instances enhance the functions of an ABAP program at runtime in the form of an [object plug-in](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_plugin_glosry.htm "Glossary Entry"). In the enhancement concept, a BAdI implementation is an [enhancement implementation element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_impl_elem_glosry.htm "Glossary Entry") and is administrated by [enhancement implementations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_impl_glosry.htm "Glossary Entry").

A BAdI consists mainly of a [BAdI interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_interface_glosry.htm "Glossary Entry") that contains the declaration of [BAdI methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_method_glosry.htm "Glossary Entry"), and a set of filters. The filters enable certain BAdI implementations to be selected for use. The following settings can be made in the definition of a BAdI, in addition to the selection of the [BAdI interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_interface_glosry.htm "Glossary Entry"):

-   Whether a BAdI is intended for single or multiple use. If a BAdI is intended for single use, only a single [BAdI implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_implementation_glosry.htm "Glossary Entry") can be used in one [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry"), and one BAdI implementation must be available for each use.

-   A fallback [BAdI implementation class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_implement_class_glosry.htm "Glossary Entry") can be specified to be used if no BAdI implementation matches the filter conditions.

-   A BAdI can be defined as context-free or context-dependent. This setting controls the instantiation of the [object plug-ins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_plugin_glosry.htm "Glossary Entry"). In context-free BAdIs, it is possible to define whether an object plug-in can be created only once or multiple times within an internal session. In context-dependent BAdIs, the object plug-ins are associated with a [context object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_context_object_glosry.htm "Glossary Entry").

Unlike the previous classic BAdIs that were processed directly in the [BAdI Builder](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_builder_glosry.htm "Glossary Entry"), the BAdIs of the enhancement concept are supported by the ABAP runtime environment by the following ABAP statements:

-   [GET BADI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_badi.htm)
    Creates a [BAdI object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_object_glosry.htm "Glossary Entry") as a handle for [object plug-ins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_plugin_glosry.htm "Glossary Entry").
    

-   [CALL BADI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_badi.htm)
    Calls [BAdI methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_method_glosry.htm "Glossary Entry") in [object plug-ins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_plugin_glosry.htm "Glossary Entry").

The BAdIs of the enhancement concept are also freely switchable using switches from [Switch Framework](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenswitch_framework_glosry.htm "Glossary Entry").

Hints

-   For a BAdI intended for single use, it is best to always enter a fallback implementation class and to implement it in the same system as the BAdI.

-   The implementation of the [BAdI methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_method_glosry.htm "Glossary Entry") of a [BAdI interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_interface_glosry.htm "Glossary Entry") can be made optional (like any other interface method) by using the addition [DEFAULT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods_default.htm).

-   For [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry"), special [AMDP BAdIs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_badi_glosry.htm "Glossary Entry") are available. These apply the effect of the switches from [Switch Framework](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenswitch_framework_glosry.htm "Glossary Entry") to the implementation of database procedures in the current database.

-   See also the Documentation Enhancement Framework in SAP Help Portal.

Continue
[GET BADI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_badi.htm)
[CALL BADI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_badi.htm)


### abapget_badi.htm

---
title: "GET BADI"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_badi_shortref.htm) Syntax GET BADI  badi FILTERS f1 = x1 f2 = x2 ...    badi TYPE (name)  FILTERS f1 = x1 f2 = x2 ...  FILTER-TABLE ftab  CONTEXT con. Additions:
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_badi.htm"
abapFile: "abapget_badi.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "abapget", "badi"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_framework.htm) →  [Enhancements Using BAdIs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_enhancement.htm) → 

GET BADI

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_badi_shortref.htm)

Syntax

GET BADI *{* badi *\[*FILTERS f1 = x1 f2 = x2 ...*\]* *}*
       *|* *{* badi TYPE (name)
              *\[* *{*FILTERS f1 = x1 f2 = x2 ...*}*
              *|* *{*FILTER-TABLE ftab*}**\]* *}*
              *\[*CONTEXT con*\]*.

Additions:

[1\. ... FILTERS f1 = x1 f2 = x2 ...](#!ABAP_ADDITION_1@1@)
[2\. ... FILTER-TABLE ftab](#!ABAP_ADDITION_2@2@)
[3\. ... CONTEXT con](#!ABAP_ADDITION_3@3@)

Effect

This statement creates a new [BAdI object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_object_glosry.htm "Glossary Entry") and sets the [BAdI reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_reference_glosry.htm "Glossary Entry") to the object in a [BAdI reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_reference_variable_glosry.htm "Glossary Entry") badi. This statement has a static and a dynamic variant.

-   In the case of the static variant, the addition TYPE is not specified. The static type of the reference variable badi must be a [BAdI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_glosry.htm "Glossary Entry"). This determines which BAdI will be used.
    

-   In the case of the dynamic variant, a character-like data object name is specified for the addition TYPE. When the statement is executed, this object must contain the name of a BAdI. The static type of the reference variable badi must be the superclass CL\_BADI\_BASE of all BAdI classes.

To specify values for the filters of the BAdI, the addition FILTERS can be specified in the static variant, or the addition FILTER-TABLE in the dynamic variant.

In the case of a context-free BAdI, the addition CONTEXT cannot be specified. In the case of a context-specific BAdI, however, it must be specified.

After instantiation, the program searches for [BAdI implementation classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_implement_class_glosry.htm "Glossary Entry") for the BAdI as follows:

1.  Only BAdI implementation classes are selected that are assigned to a [BAdI implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_implementation_glosry.htm "Glossary Entry") that is in the state active.
    
2.  Only BAdI implementation classes are selected that are assigned to a BAdI implementation (an [enhancement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_glosry.htm "Glossary Entry")) that have a [switch](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenswitch_glosry.htm "Glossary Entry") in the state on. If no switch is assigned to a BAdI implementation, it is handled in the same way as an implementation with a switch in the state on.
    
3.  All BAdI implementations are selected that satisfy the above requirements and for which the filter condition of the BAdI implementation matches the values specified after FILTERS or in ftab. If no BAdI implementations are found with the filter specifications, the system searches for BAdI implementations that are marked as standard implementations. If there are also none of these, the fallback BAdI implementation class of the BAdI is used (if one exists).
    
4.  If multiple BAdI implementation classes with matching filter conditions were found for a BAdI defined for single use, [conflict resolution](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconflict_resolution_glosry.htm "Glossary Entry") is performed. A successful conflict resolution produces exactly one priority [conflict-resolving enhancement implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconflict_resol_impl_glosry.htm "Glossary Entry") and only its BAdI implementation class is selected. If multiple conflict-solving enhancement implementations have the same priority or if there are no conflict-solving enhancement implementations at all, then a correct conflict solution is not possible and multiple BAdI implementation classes will remain in the hit list.
    

If the resulting hit list is suitable for the definition of the BAdI which means:

-   For a BAdI defined for a single use, the hit list must contain exactly one BAdI implementation class,

-   For a BAdI defined for multiple use, the hit list may contain multiple or no BAdI implementation classes,

references to [object plug-ins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_plugin_glosry.htm "Glossary Entry") of the found BAdI implementations are saved in the BAdI object. [Object plug-ins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_plugin_glosry.htm "Glossary Entry") that do not yet exist are created for this purpose. Whether an existing object plug-in is reused or whether a new object plug-in is created depends on whether the BAdI is context-free or context-dependent, and also depends on the addition CONTEXT. The precise semantics are described in the addition.

If the hit list contains no or multiple BAdI implementations although the BAdI is defined for single use, an exception occurs. If the BAdI reference variable badi is given a valid BAdI reference before the statement in an exception case, this is retained, otherwise it is initialized.

Hints

-   It is not possible to access BAdI objects directly using BAdI references. The references are only used to call the [BAdI methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_method_glosry.htm "Glossary Entry") in the referenced object plug-ins with the statement [CALL BADI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_badi.htm). Otherwise, BAdI reference variables can be used in the same operand positions as normal [object reference variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry"). In particular, this means that assignments and comparisons are possible.
    

-   The method NUMBER\_OF\_IMPLEMENTATIONS of the class CL\_BADI\_QUERY returns the number of BAdI implementations that are saved in a BAdI object.
    

-   The statement GET BADI prepares an [enhancement spot invocation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_spot_invoc_glosry.htm "Glossary Entry"), and can therefore be seen as part of an explicit [enhancement point](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_point_glosry.htm "Glossary Entry") in the terminology of the [enhancement concept](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_concept_glosry.htm "Glossary Entry").
    

-   To prevent the exception for BAdIs that are defined for single use in systems in which no corresponding enhancement is carried out, it is recommended to specify a fallback BAdI implementation class for these BAdIs. The fallback BAdI implementation class is part of the BAdI and is independent of enhancements.
    

-   To access object plug-ins directly requires the corresponding references. These can be supplied, for example, by BAdI methods.
    

-   The BAdI reference cannot be used to handle any instance events of a BAdI. Instead, when the [event handler](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenevent_handler_glosry.htm "Glossary Entry") is registered, either the addition FOR ALL INSTANCES must be specified using [SET HANDLER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_handler.htm), or an reference to an object plug-in must be entered directly.
    

Addition 1

... FILTERS f1 = x1 f2 = x2 ...

Effect

After the addition FILTERS, the elementary data objects x1, x2, ... must be specified for all f1, f2, ... filters of the BAdI. If a filter in the BAdI has the property Constant Filter Value at Call, only [literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenliteral_glosry.htm "Glossary Entry") and [constants](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstant_glosry.htm "Glossary Entry") can be specified. The data objects must be compatible with the data type of the filters. FILTERS cannot be specified for a BAdI without filters.

Addition 2

... FILTER-TABLE ftab

Effect

Using the special internal table ftab, this addition assigns values to the filters of a dynamically specified BAdI. The internal table must have table type BADI\_FILTER\_BINDINGS from ABAP Dictionary. When the statement GET BADI is executed, the table must contain exactly one line for each of the filters of the BAdI. The table columns are:

-   NAME of type c and length 30
    for the name of the filter in uppercase letters. Declaring a nonexistent filter raises an uncatchable exception.
    

-   VALUE of the type REF TO data
    A reference to a matching data object. The value of the data object that the reference variable in VALUE refers to is assigned to the filter specified in NAME.

The column NAME is the unique key of the sorted table ftab.

Addition 3

... CONTEXT con

Effect

Using the addition CONTEXT, for context-dependent BAdIs, an [object reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") con must be specified, the static type of which is, or includes, the [tag interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentag_interface_glosry.htm "Glossary Entry") IF\_BADI\_CONTEXT, and which contains a reference to a [BAdI context object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_context_object_glosry.htm "Glossary Entry"). If con is initial, an exception is raised. The addition CONTEXT cannot be entered for context-free BAdIs.

The addition CONTEXT controls how the object plug-ins are created as follows:

-   Without the addition CONTEXT, hence for context-free BAdIs, the way the object plug-ins are created is based on the setting of the BAdI. Either new plug-ins are created every time the statement GET BADI is executed, or an object plug-in that has already been created in the current [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") is reused, if it is required again. An object plug-in of this type is a singleton in terms of its BAdI implementation class.
    

-   Using the addition CONTEXT, and hence for context-dependent BAdIs, the same object plug-ins are always used for the same content of con. These object plug-ins are singletons in terms of their BAdI implementation class and a BAdI context object.

If a BAdI implementation class implements multiple [BAdI interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_interface_glosry.htm "Glossary Entry") and GET BADI is executed within one internal session for more than one of these BAdIs, multiple BAdI objects can point to the same object plug-in. This enables the sharing of data between different BAdIs. For context-free BAdIs, this is only the case for reuse. For context-dependent BAdIs, multiple BAdI objects from the same context can point to the same object plug-ins.

Hints

-   The fact that object plug-ins can either be newly generated or reused can also be expressed in terms of an object plug-in being stateful or stateless with reference to a BAdI or a context.
    

-   The tag interface IF\_BADI\_CONTEXT can be implemented by any class. Possible applications range from the implementation in a local class without other components that have the sole purpose of enabling internal program context administration for BAdIs, to the implementation in a global application class in which the objects are specifically enhanced.
    

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_BADI\_CONTEXT\_ERROR

-   Cause: A context error has occurred in the dynamic variant of the statement.

CX\_BADI\_FILTER\_ERROR

-   Cause: Incorrect information was specified about the filters of the BAdI in the dynamic variant of the statement.

CX\_BADI\_INITIAL\_CONTEXT

-   Cause: The reference variable specified after CONTEXT is initial.

CX\_BADI\_MULTIPLY\_IMPLEMENTED

-   Cause: Multiple BAdI implementation classes were found, although the BAdI is defined for single use. Subclass of CX\_BADI\_NOT\_SINGLE\_USE.

CX\_BADI\_NOT\_IMPLEMENTED

-   Cause: No BAdI implementation class was found, although the BAdI is defined for single use. Subclass of CX\_BADI\_NOT\_SINGLE\_USE.

CX\_BADI\_UNKNOWN\_ERROR

-   Cause: The BAdI specified in the dynamic variant does not exist.


### abapcall_badi.htm

---
title: "CALL BADI"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_badi_shortref.htm) Syntax CALL BADI  badi->meth parameter_list(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_method_parameters.htm)    badi->(meth_name) parameter_list(ht
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_badi.htm"
abapFile: "abapcall_badi.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "abapcall", "badi"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_framework.htm) →  [Enhancements Using BAdIs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_enhancement.htm) → 

CALL BADI

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_badi_shortref.htm)

Syntax

CALL BADI *{* badi->meth [parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_method_parameters.htm) *}*
        *|* *{* badi->(meth\_name) *{*[parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_method_parameters.htm)
                              *|* [parameter\_tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_method_parameter_tables.htm)*}* *}*.

Effect

Calls a [BAdI method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_method_glosry.htm "Glossary Entry"). The statement has a static and a dynamic variant. In both variants a [BAdI reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_reference_variable_glosry.htm "Glossary Entry") must be specified for badi.

-   In the static variant, a [BAdI reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_reference_variable_glosry.htm "Glossary Entry") of the static type of a concrete [BAdI class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_class_glosry.htm "Glossary Entry") must be specified for badi, and for meth a BAdI method of the corresponding [BAdI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_glosry.htm "Glossary Entry") must be entered directly.
    

-   In the dynamic variant, a [BAdI reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_reference_variable_glosry.htm "Glossary Entry") of the static type of the abstract superclass CL\_BADI\_BASE must be specified for badi. For meth\_name, a character-like data object must be specified that must contain the name of a BAdI method in uppercase when the statement is executed.

With respect to the addressing of BAdI methods, the BAdI reference variable behaves like an [interface reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninterface_ref_variable_glosry.htm "Glossary Entry") with the static type of the affected [BAdI interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_interface_glosry.htm "Glossary Entry"). A BAdI method declared as a component of the corresponding BAdI interface is addressed directly using its name. BAdI methods declared in [component interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomponent_interface_glosry.htm "Glossary Entry") of the BAdI interface can be addressed using the [interface component selector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninterface_comp_selector_glosry.htm "Glossary Entry") or any [alias names](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalias_glosry.htm "Glossary Entry").

The additions [parameter\_list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_method_parameters.htm) or [parameter\_tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_method_parameter_tables.htm) assign actual parameters to the formal parameters of the BAdI method or handle non-class-based exceptions exactly as described in [Method Call](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_calls.htm). The exceptions that can occur in dynamic accesses are also the same as those of [CALL METHOD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_method_dynamic.htm).

The statement CALL BADI specifies that the specified method is called in all [object plug-ins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_plugin_glosry.htm "Glossary Entry") to which the [BAdI object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_object_glosry.htm "Glossary Entry") referenced by the badi refers.

-   If the BAdI is defined for single use, badi must contain a valid [BAdI reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_reference_glosry.htm "Glossary Entry") for a static BAdI call. If badi is initial, a catchable exception is raised.
    

-   If the BAdI is defined for multiple use, badi must contain a valid [BAdI reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_reference_glosry.htm "Glossary Entry") or can be initial for a static BAdI call. If the referenced BAdI object refers to multiple object plug-ins ,the call order is the same for every CALL BADI statement. The exact call order can be determined in the definition of the associated [BAdI implementations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbadi_implementation_glosry.htm "Glossary Entry"), if the predefined BAdI BADI\_SORTER of the enhancement spot of the same name was implemented for the current BAdI. If the referenced BAdI object does not reference object plug-ins, or the badi is initial, the statement is ignored.
    

-   In a dynamic BAdI call, a catchable exception is always raised if there is an invalid BAdI reference in badi.

If a method is added to a BAdI afterwards, it can be missing in a BAdI implementation. In this case the call is executed as if the method existed with an empty implementation. Actual parameters that are bound to EXPORTING or RETURNING parameters passed by value are initialized. All other actual parameters remain unchanged.

System Fields

With a regular method call, the system field sy-subrc is either set to 0 or, when handling non-class-based exceptions, it is set to the value specified after EXCEPTIONS.

Hints

-   BAdI objects and BAdI references can only be created using the statement [GET BADI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_badi.htm).
    

-   In the terminology of the [enhancement concept](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_concept_glosry.htm "Glossary Entry"), the statement CALL BADI is known as an [enhancement spot element invocation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_spot_invoc_glosry.htm "Glossary Entry").
    

-   The call of a BAdI method of a BAdI defined for single use behaves like a method call with meth( ...): the called method must exist. In contrast, calls of a BAdI method defined for multiple use are more similar to the raising of an event using RAISE EVENT: One or more methods can exist, or no methods at all.
    

-   The addition [DEFAULT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmethods_default.htm) can be used when defining a BAdI method in a BAdI interface to define the behavior for methods that are not implemented.
    

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_BADI\_INITIAL\_REFERENCE

-   Cause: The reference variable badi is initial either for the static call, although the BAdI was defined for single use, or for the dynamic call.

CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD

-   Cause: Method does not exist at the dynamic call
    Runtime error: DYN\_CALL\_METH\_NOT\_FOUND
