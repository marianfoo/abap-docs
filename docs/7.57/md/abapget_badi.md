---
title: "GET BADI"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_badi_shortref.htm) Syntax GET BADI  badi FILTERS f1 = x1 f2 = x2 ...    badi TYPE (name)  FILTERS f1 = x1 f2 = x2 ...  FILTER-TABLE ftab  CONTEXT con. Additions:
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_badi.htm"
abapFile: "abapget_badi.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "abapget", "badi"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_framework.htm) →  [Enhancements Using BAdIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_enhancement.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET BADI, ABAPGET_BADI, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for i
mprovement:)

GET BADI

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_badi_shortref.htm)

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

This statement creates a new [BAdI object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_object_glosry.htm "Glossary Entry") and sets the [BAdI reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_reference_glosry.htm "Glossary Entry") to the object in a [BAdI reference variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_reference_variable_glosry.htm "Glossary Entry") badi. This statement has a static and a dynamic variant.

-   In the case of the static variant, the addition TYPE is not specified. The static type of the reference variable badi must be a [BAdI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_glosry.htm "Glossary Entry") and determines which BAdI is used.
-   In the case of the dynamic variant, a character-like data object name is specified for the addition TYPE. When the statement is executed, this object must contain the name of a BAdI. The static type of the reference variable badi must be the superclass CL\_BADI\_BASE of all BAdI classes.

To specify values for the filters of the BAdI, the addition FILTERS can be specified in the static variant, or the addition FILTER-TABLE in the dynamic variant.

In the case of a context-free BAdI, the addition CONTEXT cannot be specified. In the case of a context-dependent BAdI, however, it must be specified.

After instantiation, the system searches for [BAdI implementation classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_implement_class_glosry.htm "Glossary Entry") for the BAdI as follows:

1.  Only BAdI implementation classes are selected that are assigned to a [BAdI implementation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_implementation_glosry.htm "Glossary Entry") that is in the state active.
2.  Only BAdI implementation classes are selected that are assigned to a BAdI implementation, that is, to an [enhancement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_glosry.htm "Glossary Entry") whose [switch](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenswitch_glosry.htm "Glossary Entry") is in the state on. If no switch is assigned to a BAdI implementation, it is handled in the same way as an implementation with a switch in the state on.
3.  All BAdI implementation classes are selected that satisfy the above requirements and for which the filter condition of the BAdI implementation matches the values specified after FILTERS or in ftab. If no BAdI implementations are found with the filter specifications, the system searches for BAdI implementations that are marked as standard implementations. If non are found, the fallback BAdI implementation class of the BAdI is used (if available).
4.  If multiple BAdI implementation classes with matching filter conditions were found for a BAdI defined for single use, [conflict resolution](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconflict_resolution_glosry.htm "Glossary Entry") is performed. A successful conflict resolution produces exactly one priority [conflict-resolving enhancement implementation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconflict_resol_impl_glosry.htm "Glossary Entry") and only its BAdI implementation class is selected. If multiple conflict-solving enhancement implementations have the same priority or if there are no conflict-solving enhancement implementations at all, then a correct conflict solution is not possible and multiple BAdI implementation classes will remain in the hit list.

If the resulting hit list matches the definition of the BAdI which means:

-   For a BAdI defined for single use, the hit list must contain exactly one BAdI implementation class,
-   For a BAdI defined for multiple use, the hit list may contain multiple or no BAdI implementation classes,

references to [object plug-ins](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_plugin_glosry.htm "Glossary Entry") of the found BAdI implementations are stored in the BAdI object. [Object plug-ins](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_plugin_glosry.htm "Glossary Entry") that do not yet exist are created for this purpose. Whether an existing object plug-in is reused or whether a new object plug-in is created depends on whether the BAdI is context-free or context-dependent, and also depends on the addition CONTEXT. The precise semantics are described in the addition.

If the hit list contains no or multiple BAdI implementations although the BAdI is defined for single use, an exception occurs. If the BAdI reference variable badi contained a valid BAdI reference before the statement in an exception case, this is retained, otherwise it is initialized.

Hints

-   It is not possible to access BAdI objects directly using BAdI references. The references are only used to call the [BAdI methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_method_glosry.htm "Glossary Entry") in the referenced object plug-ins with the statement [CALL BADI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_badi.htm). Otherwise, BAdI reference variables can be used in the same operand positions as regular [object reference variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry"). In particular, this means that assignments and comparisons are possible.
-   The method NUMBER\_OF\_IMPLEMENTATIONS of the class CL\_BADI\_QUERY returns the number of BAdI implementations that are stored in a BAdI object.
-   The statement GET BADI prepares an [enhancement spot element call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_spot_invoc_glosry.htm "Glossary Entry") and can therefore be seen as part of an explicit [enhancement option](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_point_glosry.htm "Glossary Entry") in the terminology of the [ABAP Enhancement Framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_framework_glosry.htm "Glossary Entry").
-   To prevent the exception for BAdIs that are defined for single use in systems in which no corresponding enhancement is made, it is recommended that a fallback BAdI implementation class is specified for these BAdIs. The fallback BAdI implementation class is part of the BAdI and is independent of enhancements.
-   To access object plug-ins directly requires the corresponding references. These can be returned, for example, by BAdI methods.
-   The BAdI reference cannot be used to handle any instance events of a BAdI. Instead, when the [event handler](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevent_handler_glosry.htm "Glossary Entry") is registered, either the addition FOR ALL INSTANCES must be specified using [SET HANDLER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_handler.htm), or a reference to an object plug-in must be specified directly.

Addition 1   

... FILTERS f1 = x1 f2 = x2 ...

Effect

After the addition FILTERS, the elementary data objects x1, x2, ... must be specified for all f1, f2, ... filters of the BAdI. If a filter in the BAdI has the property Constant Filter Value at Call, only [literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_literal_glosry.htm "Glossary Entry") and [constants](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstant_glosry.htm "Glossary Entry") can be specified. The data objects must be compatible with the data type of the filters. FILTERS cannot be specified for a BAdI without filters.

Addition 2   

... FILTER-TABLE ftab

Effect

Using the special internal table ftab, this addition assigns values to the filters of a dynamically specified BAdI. The internal table must have table type BADI\_FILTER\_BINDINGS from the ABAP Dictionary. When the statement GET BADI is executed, the table must contain exactly one line for each of the filters of the BAdI. The table columns are:

-   NAME of type c and length 30
    
    for the name of the filter in uppercase letters. Declaring a nonexistent filter raises an uncatchable exception.
    
-   VALUE of the type REF TO data
    
    As a pointer to a matching data object. The value of the data object to which the reference variable in VALUE refers is assigned to the filter specified in NAME.
    

The column NAME is the unique key of the sorted table ftab.

Addition 3   

... CONTEXT con

Effect

Using the addition CONTEXT, an [object reference variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry") con must be specified for context-dependent BAdIs, whose static type is or includes the [tag interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentag_interface_glosry.htm "Glossary Entry") IF\_BADI\_CONTEXT, and which contains a reference to a [BAdI context object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_context_object_glosry.htm "Glossary Entry"). If con is initial, an exception is raised. The addition CONTEXT cannot be entered for context-free BAdIs.

The addition CONTEXT controls how the object plug-ins are created as follows:

-   Without the addition CONTEXT, that is, for context-free BAdIs, the way the object plug-ins are created is based on the setting of the BAdI. Either new plug-ins are created every time the statement GET BADI is executed, or an object plug-in that has already been created in the current [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") is reused, if it is required again. An object plug-in of this type is a singleton in terms of its BAdI implementation class.
-   Using the addition CONTEXT, that is, for context-dependent BAdIs, the same object plug-ins are always used for the same content of con. These object plug-ins are singletons in terms of their BAdI implementation class and a BAdI context object.

If a BAdI implementation class implements multiple [BAdI interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_interface_glosry.htm "Glossary Entry") and GET BADI is executed within an internal session for multiple of these BAdIs, multiple BAdI objects can point to the same object plug-in. This enables the sharing of data between different BAdIs. For context-free BAdIs, this is only the case for reuse. For context-dependent BAdIs, multiple BAdI objects from the same context can point to the same object plug-ins.

Hints

-   The fact that object plug-ins can either be newly generated or reused can also be expressed in terms of an object plug-in being stateful or stateless with reference to a BAdI or a context.
-   The tag interface IF\_BADI\_CONTEXT can be implemented by any class. Possible applications range from the implementation in a local class without other components that have the sole purpose of enabling internal program context administration for BAdIs, to the implementation in a global application class in which the objects are specifically enhanced.

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_BADI\_CONTEXT\_ERROR

-   Cause: A context error has occurred in the dynamic variant of the statement.

CX\_BADI\_FILTER\_ERROR

-   Cause: Incorrect information was specified for the filters of the BAdI in the dynamic variant of the statement.

CX\_BADI\_INITIAL\_CONTEXT

-   Cause: The reference variable specified after CONTEXT is initial.

CX\_BADI\_MULTIPLY\_IMPLEMENTED

-   Cause: Multiple BAdI implementation classes were found, although the BAdI is defined for single use. Subclass of CX\_BADI\_NOT\_SINGLE\_USE.

CX\_BADI\_NOT\_IMPLEMENTED

-   Cause: No BAdI implementation class was found, although the BAdI is defined for single use. Subclass of CX\_BADI\_NOT\_SINGLE\_USE.

CX\_BADI\_UNKNOWN\_ERROR

-   Cause: The BAdI specified in the dynamic variant of the statement does not exist.