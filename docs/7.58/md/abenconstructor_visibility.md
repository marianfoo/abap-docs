  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Classes](javascript:call_link\('abenclasses.htm'\)) →  [ABAP Objects - Components of Classes](javascript:call_link\('abenclass_components.htm'\)) →  [ABAP Objects - Constructors of Classes](javascript:call_link\('abenconstructor.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Visibility%20of%20Instance%20Constructors%2C%20ABENCONSTRUCTOR_VISIBILITY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

ABAP Objects - Visibility of Instance Constructors

For technical reasons, the instance constructor of a class is declared in a [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") and is therefore theoretically visible to the corresponding consumers. However, an instance constructor is only executed when an object of this class is created using CREATE OBJECT. Therefore, the instance constructor is only visible to the users of a class that can also create objects of this class.

The additions CREATE PUBLIC*|*PROTECTED*|*PRIVATE of the statement [CLASS](javascript:call_link\('abapclass.htm'\)) determine whether each user, only the heirs, or just the class itself can create objects of the class. This means that these additions define the actual visibility of the instance constructor implicitly. Therefore, the following applies:

-   The instance constructor of a class defined using CREATE PUBLIC can be called by any user.
-   The instance constructor of a class defined using CREATE PROTECTED can only be called by the class itself and its subclasses.
-   The instance constructor of a class defined using CREATE PRIVATE can only be called by the class itself.

This has the following important consequence:

If a class was defined using CREATE PRIVATE, only the class itself can instantiate itself. Subclasses of this class cannot even instantiate themselves, because they would have to call the superclass constructor using [CALL super->constructor](javascript:call_link\('abapcall_method_meth_super.htm'\)) (see also [Inheritance and Instance Creation](javascript:call_link\('abeninheritance_instantiation.htm'\))).