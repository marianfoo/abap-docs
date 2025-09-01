  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) →  [Inheritance](javascript:call_link\('abeninheritance.htm'\)) → 

Redefining Methods

Each subclass contains the components of all classes that are located between this class and the root node in the inheritance tree. The visibility of a component is always the same and cannot be changed. However, it is possible to redefine the public and protected instance methods of all preceding superclasses using the addition [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)) of the statement [METHODS](javascript:call_link\('abapmethods.htm'\)), This modifies them to the required level of specialization. The interface of a redefined method cannot be changed here and the method is merely implemented as a new method with the same name. Constructors cannot be redefined and [special rules](javascript:call_link\('abeninheritance_constructors.htm'\)) apply instead.

The declaration of the method is preserved in the superclass as is its previous implementation. The implementation of the redefinition is created again in the subclass and obscures the implementation of the superclass. A redefined method works with the private attributes of the subclass and not with any private superclass attributes of the same name.

Each reference that points to a subclass object uses the redefined method, even if it was typed with reference to a superclass. In particular, this also applies to the [self reference](javascript:call_link\('abenself_reference_glosry.htm'\) "Glossary Entry") me. For example, if a superclass method m1 contains a call *\[*me->*\]*m2( ) and if m2 is redefined in a subclass, the call of m1 in an instance of the superclass causes the original method m2 to be executed and the call of m1 in an instance of the subclass causes the redefined method m2 to be executed.

Within a redefined method, [super->meth](javascript:call_link\('abapcall_method_meth_super.htm'\)) can be used to access the obscured method, for example to apply and supplement its functions.