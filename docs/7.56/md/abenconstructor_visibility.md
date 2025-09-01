  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_objects_oview.htm) →  [ABAP Objects - Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclasses.htm) →  [ABAP Objects - Components of Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_components.htm) →  [ABAP Objects - Constructors of Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor.htm) → 

ABAP Objects - Visibility of Instance Constructors

For technical reasons, the instance constructor of a class is declared in a [visibility section](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvisibility_section_glosry.htm "Glossary Entry") and is therefore theoretically visible to the corresponding consumers. However, an instance constructor is only executed when an object of this class is created using CREATE OBJECT. Therefore, the instance constructor is only visible to the users of a class that can also create objects of this class.

The additions CREATE PUBLIC*|*PROTECTED*|*PRIVATE of the statement [CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass.htm) determine whether each user, only the heirs, or just the class itself can create objects of the class. This means that these additions define the actual visibility of the instance constructor implicitly. Therefore, the following applies:

-   The instance constructor of a class defined using CREATE PUBLIC can be called by any user.
-   The instance constructor of a class defined using CREATE PROTECTED can only be called by the class itself and its subclasses.
-   The instance constructor of a class defined using CREATE PRIVATE can only be called by the class itself.

This has the following important consequence:

If a class was defined using CREATE PRIVATE, only the class itself can instantiate itself. Subclasses of this class cannot even instantiate themselves, because they would have to call the superclass constructor using [CALL super->constructor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_meth_super.htm) (see also [Inheritance and Instance Creation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninheritance_instantiation.htm)).