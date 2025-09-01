  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INTERFACE%2C%20ABAPINTERFACE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INTERFACE

[Short Reference](javascript:call_link\('abapinterface_shortref.htm'\))

Syntax Forms

[Declaration of Interfaces](javascript:call_link\('abapinterface_definition.htm'\))

1\. INTERFACE intf *\[*PUBLIC*\]*.
    *\[*[components](javascript:call_link\('abeninterface_component.htm'\))*\]*
  ENDINTERFACE.

[Deferred Interfaces](javascript:call_link\('abapinterface_deferred.htm'\))

2\. INTERFACE intf DEFERRED *\[*PUBLIC*\]*.

Effect

The statement INTERFACE defines [interfaces](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry") in ABAP Objects or defers their declaration.

-   The definition of an interface consists of a [declaration section](javascript:call_link\('abapinterface_definition.htm'\)) that starts with INTERFACE and is closed using ENDINTERFACE. Unlike classes, an interface does not have an implementation part.
-   The variant of INTERFACE without ENDINTERFACE is used for [deferring interfaces](javascript:call_link\('abapinterface_deferred.htm'\)) in a program.

The statements INTERFACE and associated statements ENDINTERFACE can only be specified in the global context of a program. INTERFACE and ENDINTERFACE cannot be specified within classes, procedures, and processing blocks implemented internally as a procedure, that is, event blocks for [GET](javascript:call_link\('abapget-.htm'\)) and [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\))). This applies in particular to the variant of INTERFACE specified here, which is not closed using ENDINTERFACE.

Hints

-   The definition or deferral of an interface is handled like other declaration statements (DATA, TYPE, ...). In a processing block without a local context, they are handled like global program declarations and do not close the processing block.
-   Previously, an obsolete variant [INTERFACE ... LOAD](javascript:call_link\('abapclass_interface_load.htm'\)) was used to load interfaces explicitly.

Continue
[INTERFACE intf](javascript:call_link\('abapinterface_definition.htm'\))
[ENDINTERFACE](javascript:call_link\('abapendinterface.htm'\))
[INTERFACE, DEFERRED](javascript:call_link\('abapinterface_deferred.htm'\))