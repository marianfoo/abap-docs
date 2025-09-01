  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) →  [ABAP Objects - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_objects_oview.htm) →  [ABAP Objects - Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects - Object References, ABENREFERENCES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

ABAP Objects - Object References

Object references are used as pointers to objects. The content of object reference variables, that is, the object references, are the only way to [access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_components_addressing.htm) the components of objects in an ABAP program. References can be used to access attributes and methods, but not events.

-   [Object Reference Variables](#@@ITOC@@ABENREFERENCES_1)
-   [Static Type of Object Reference Variables](#@@ITOC@@ABENREFERENCES_2)
    -   [Class Reference Variables](#@@ITOC@@ABENREFERENCES_3)
    -   [Interface Reference Variables](#@@ITOC@@ABENREFERENCES_4)
    -   [Special Object Reference Variables](#@@ITOC@@ABENREFERENCES_5)
-   [Initializes Object Reference Variables](#@@ITOC@@ABENREFERENCES_6)
-   [Assigning Object References Using Upcast](#@@ITOC@@ABENREFERENCES_7)
-   [Assigning Object References Using Downcast](#@@ITOC@@ABENREFERENCES_8)
-   [Object References as Actual Parameters](#@@ITOC@@ABENREFERENCES_9)
-   [Assigning Object References to Field Symbols](#@@ITOC@@ABENREFERENCES_10)

Object Reference Variables   

Object reference variables contain object references. An object reference variable oref is either initial or contains a reference to an existing object. In the latter case, the [predicate expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [oref IS BOUND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_bound.htm) is true. An object reference variable that points to an object contains the 'address' of the object. Objects and their components can only be addressed using object references.

Reference variables are data objects with a deep data type. A reference variable can be defined as the smallest indivisible unit of complex data objects, such as structures or internal tables. When handling reference variables or complex data objects that contain reference variables, it should be noted that the special features apply to deep types.

Static Type of Object Reference Variables   

Object reference variables can be created either as class reference variables or interface reference variables.

Class Reference Variables   

A reference variable with the static type of a class is called a class reference variable. Class reference variables are defined using the addition TYPE REF TO class of the TYPES statement or DATA statement. In this case, class is a [class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_glosry.htm "Glossary Entry") known at the point of declaration.

A class reference variable cref allows a user to use the form cref->comp to access all of the visible components comp of the object to which the object reference points, which usually means all public components of the class.

Interface Reference Variables   

A reference variable with the static type of an interface is called an interface reference variable. Interface reference variables are defined using the addition TYPE REF TO intf of the TYPES statement or DATA statement. In this case, intf is an [interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoo_intf_glosry.htm "Glossary Entry") known at the point of declaration.

An interface reference iref allows a user to use iref->icomp to access all of the visible interface components icomp of the object to which the reference points. Interface components are those components of an object that are declared by implementing the interface in the class.

Apart from declarations, the addition REF TO ... can be used in all ABAP statements in which types can be specified, such as the specification of the [types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_glosry.htm "Glossary Entry") of interface parameters in [procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry").

Special Object Reference Variables   

Within a class there are two special references, the [self-reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenself_reference_glosry.htm "Glossary Entry") me and the [pseudo reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpseudo_reference_glosry.htm "Glossary Entry") super.

-   The self-reference me is used to address the components of an object explicitly. In the instance methods of a class, me is a predefined local reference variable with the type of the class in which the instance method is implemented that points to its own instance. It can be specified when addressing its own component but does not have to be. It can also be assigned to other reference variables or passed to methods.
-   The pseudo reference super is used to call the hidden method in a redefined instance method in inheritance. The pseudo reference is not a real reference variable because an instance of a subclass cannot have a corresponding superclass instance, and can therefore not have a reference variable. The pseudo reference super is the syntactical expression for a method call in a superclass.

Initializes Object Reference Variables   

Like other variables, object reference variables are also initialized using the statement [CLEAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclear.htm). The initial value of an object reference variable is a reference that does not point to any object.

Assigning Object References Using Upcast   

Object references can be assigned between object reference variables. This means that the references in multiple reference variables can point to the same object (sharing). In assignments between reference variables, the dynamic type of the source variable must be compatible with the static type of the target variable. The dynamic type is the class of the object to which the reference in a reference variable points. The static type is the type (class or interface) with which the reference variable is typed. The static type of the target variable must always be more general than the dynamic type of the source variable.

The syntax check in the program can only compare the static type of the source variable with the static type of the target variable. In assignments using the [assignment operator (\=)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenequals_operator.htm), this comparison is made, and assignments are only possible if they meet the above requirements for static types (known as [upcasts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenup_cast_glosry.htm "Glossary Entry")). The same applies to passing parameters to procedures. Such assignments are always possible if the static type of the target variable can address only the same number or fewer components as the static type of the source variable or fewer components.

If cref1 and cref2 are class reference variables and iref1 and iref2 are interface reference variables, the following assignments can be checked statically:

-   cref1 = cref2
    
    Both class reference variables must refer to the same class or the class of cref1 is a superclass of the class of cref2. The class of cref1 can therefore always be object because object is the superclass of all classes in ABAP Objects.
    
-   iref1 = iref2
    
    Both interface reference variables must refer to the same interface, or the interface of iref2 must be a nested, with the interface of iref1 as a component.
    
-   iref1 = cref1
    
    The class of the class reference variable cref1 or one of its superclasses must implement the interface of the interface reference variable iref1. The implementation can be performed directly or using a nested interface that contains the interface of iref1 as a component.
    
-   cref1 = iref1
    
    The class of cref1 must be object, that is, the reference variable cref1 must have the type REF TO object.
    

object is a predefined empty class and the root node of the inheritance tree of ABAP Objects. This class has no components and is the generic type of all object reference variables. Reference variables with the type object can be used as containers for passing references. They cannot be used for static [access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_components_addressing.htm) to objects but dynamic access is possible.

Assigning Object References Using Downcast   

In all cases where a static type check is not possible, and whenever type checks should only take place at program runtime, an explicit downcast is must be performed. The following make this possible:

-   Assignments with the casting operator [?=](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove_cast.htm). In this case, the system does not check for static types, but checks at runtime whether the object reference in the source variable points to an object to which the object reference in the target variable may also point. The dynamic type of the source variable is compared with the static type of the target variable. If an assignment is possible, this is performed, otherwise, the catchable exception CX\_SY\_MOVE\_CAST\_ERROR is raised.
-   [Constructor expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") using the casting operator [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_cast.htm) that can be used in all operand positions. The effect is the same as in an assignment, but can cut down on auxiliary variables.
-   The addition INTO of the statement [WHEN TYPE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhen_type.htm) in a case distinction using [CASE TYPE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcase_type.htm). This combines a check for the feasibility of the downcast and the downcast itself.

The syntax requires a downcast to be used in all cases that are not specified above for static type checks.

For non-initial reference variables, the predicate expression [IS INSTANCE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_instance_of.htm) or the case distinction [CASE TYPE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcase_type.htm) can be used to check whether a downcast is possible on specific classes or interfaces.

Example

cref1 ?= iref1

Assignment of an interface reference variable to a class reference variable. For the assignment to be successful, the object to which iref1 points must belong to the same class as the type of the class reference variable cref1 or to an appropriate subclass.

Object References as Actual Parameters   

Object references can be passed to [procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry") (methods, function modules, and subroutines) by specifying object reference variables as actual parameters. In typed formal parameters, it is important to note that only actual parameters of exactly the same type can be passed if the formal parameter can be changed in the procedure. This applies also to EXPORTING and CHANGING parameters of function modules and methods, parameters in subroutines passed by reference, and CHANGING parameters in subroutines passed by value.

Passing actual parameters to formal parameters like in an [upcast](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenup_cast_glosry.htm "Glossary Entry"), for example, passing a class reference variable to a formal parameter that is typed with reference to an interface of the class or one of its superclasses, is not possible if the parameter can be changed in the procedure.

The reason for this is that a reference could be assigned to the actual parameter in the procedure which is incompatible with its static type, such as a reference to any other class that implements the same interface or a reference to a subclass in another path of the inheritance tree.

Assigning Object References to Field Symbols   

To assign object references to typed field symbols, the same applies as to passing a reference to typed formal parameters: The types must be identical. Otherwise, incompatibilities between dynamic and static types may occur here. For example, it is sufficient to assign two class reference variables of different classes that implement the same interface one after the other to the same field symbol to cause an inconsistent status.