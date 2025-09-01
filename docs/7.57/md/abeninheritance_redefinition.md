  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [ABAP Objects - Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects - Redefining Methods, ABENINHERITANCE_REDEFINITION, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Objects - Redefining Methods

Each subclass contains the components of all classes that are located between this class and the root node in the inheritance tree. The visibility of a component is always the same and cannot be changed. However, it is possible to redefine the public and protected instance methods of all preceding superclasses using the addition [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)) of the statement [METHODS](javascript:call_link\('abapmethods.htm'\)), to adapt them to the required level of specialization. The interface of a redefined method cannot be changed. The method is merely reimplemented with the same name. Constructors cannot be redefined and [special rules](javascript:call_link\('abeninheritance_constructors.htm'\)) apply.

The method declaration remains in the superclass, and its previous implementation is also retained there. The implementation of the redefinition is also generated for the subclass and hides the implementation of the superclass. A redefined method works with the private attributes of the subclass and not with any private superclass attributes with the same name.

Each reference that points to a subclass object uses the redefined method, even if it was typed with reference to a superclass. In particular, this also applies to the [self-reference](javascript:call_link\('abenself_reference_glosry.htm'\) "Glossary Entry") me. For example, if a superclass method m1 contains a call *\[*me->*\]*m2( ) and if m2 is redefined in a subclass, the call of m1 in an instance of the superclass causes the original method m2 to be executed and the call of m1 in an instance of the subclass causes the redefined method m2 to be executed.

Within a redefined method, [super->meth](javascript:call_link\('abapcall_method_meth_super.htm'\)) can be used to access the hidden method, for example, to adapt and supplement its functions.