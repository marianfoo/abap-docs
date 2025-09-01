# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP Objects / ABAP Objects - Objects

Included pages: 4


### abenobject.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Objects%2C%20ABENOBJECT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Objects

Objects are instances of classes. There can be any number of objects or instances in a class. Each object has a unique identity and its own attributes.

By default, all objects have the same priority in the [data area](javascript:call_link\('abendata_area_glosry.htm'\) "Glossary Entry") of an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). This means that objects can only be accessed within an internal session.

For cross-transaction objects, there are [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry") that can be accessed by all programs of an AS instance at the same time.

[Object Services](javascript:call_link\('abenobject_services_glosry.htm'\) "Glossary Entry") are available for handling persistent objects in the database. These can link the attributes of objects with the content of DDIC database tables and can execute object-oriented transactions.

Creating Objects   

To create an object, an [object reference variable](javascript:call_link\('abenreferences.htm'\)) is required that can point to the required class:

-   After a class reference variable obj is declared for a class class, an object of that class can be created using the statement [CREATE OBJECT obj](javascript:call_link\('abapcreate_object.htm'\)). This statement creates an instance of the class class and the reference variable obj contains a [reference](javascript:call_link\('abenreferences.htm'\)) to this object.
-   After a class reference variable obj is declared for a superclass of the class class or an interface reference variable obj for an interface implemented by the class class, the addition TYPE class of the statement [CREATE OBJECT obj](javascript:call_link\('abapcreate_object.htm'\)) can be used to create an instance of the class class.

The instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) enables objects to be created in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

Access to Instance Components   

A program can access the visible instance components of an object only by using references in [reference variables](javascript:call_link\('abenreferences.htm'\)). For the corresponding syntax, see [Accessing Components of Classes](javascript:call_link\('abenclass_components_addressing.htm'\)).

Lifetime of Objects   

An object lives for as long as it is used in the internal session (known as the [heap](javascript:call_link\('abenheap_glosry.htm'\) "Glossary Entry")). An object is used for as long as at least one [heap reference](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") points to the object, to an instance attribute, or to a part of the instance attribute or as long as at least one method of the object is registered as an [event handler](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry"). Field symbols to which an instance attribute or part of an instance attribute is assigned, have the same effect as data references.

As soon as an object has no more references and none of its methods are registered as an event handler, it can be deleted by the [Garbage Collector](javascript:call_link\('abengarbage_collector_glosry.htm'\) "Glossary Entry"). This releases the identity of the object to be taken by a new object.

Hint

In addition to the regular references, there are [weak references](javascript:call_link\('abencl_abap_weak_reference.htm'\)) represented by objects that do not keep an object alive.

Continue
[ABAP Objects - Object References](javascript:call_link\('abenreferences.htm'\))
[ABAP Objects - Accessing Class Components](javascript:call_link\('abenclass_components_addressing.htm'\))
[ABAP Objects - Object References in Internal Tables](javascript:call_link\('abenclass_attributes_as_key.htm'\))


### abenreferences.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Objects](javascript:call_link\('abenobject.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Object%20References%2C%20ABENREFERENCES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Object References

Object references are used as pointers to objects. The content of object reference variables, that is, the object references, are the only way to [access](javascript:call_link\('abenclass_components_addressing.htm'\)) the components of objects in an ABAP program. References can be used to access attributes and methods, but not events.

-   [Object Reference Variables](#abenreferences-1-------static-type-of-object-reference-variables---@ITOC@@ABENREFERENCES_2)
    -   [Class Reference Variables](#abenreferences-3-----------interface-reference-variables---@ITOC@@ABENREFERENCES_4)
    -   [Special Object Reference Variables](#abenreferences-5-------initializes-object-reference-variables---@ITOC@@ABENREFERENCES_6)
-   [Assigning Object References Using Upcast](#abenreferences-7-------assigning-object-references-using-downcast---@ITOC@@ABENREFERENCES_8)
-   [Object References as Actual Parameters](#abenreferences-9-------assigning-object-references-to-field-symbols---@ITOC@@ABENREFERENCES_10)

Object Reference Variables   

Object reference variables contain object references. An object reference variable oref is either initial or contains a reference to an existing object. In the latter case, the [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry") [oref IS BOUND](javascript:call_link\('abenlogexp_bound.htm'\)) is true. An object reference variable that points to an object contains the 'address' of the object. Objects and their components can only be addressed using object references.

Reference variables are data objects with a deep data type. A reference variable can be defined as the smallest indivisible unit of complex data objects, such as structures or internal tables. When handling reference variables or complex data objects that contain reference variables, it should be noted that the special features apply to deep types.

Static Type of Object Reference Variables   

Object reference variables can be created either as class reference variables or interface reference variables.

Class Reference Variables   

A reference variable with the static type of a class is called a class reference variable. Class reference variables are defined using the addition TYPE REF TO class of the TYPES statement or DATA statement. In this case, class is a [class](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry") known at the point of declaration.

A class reference variable cref allows a user to use the form cref->comp to access all of the visible components comp of the object to which the object reference points, which usually means all public components of the class.

Interface Reference Variables   

A reference variable with the static type of an interface is called an interface reference variable. Interface reference variables are defined using the addition TYPE REF TO intf of the TYPES statement or DATA statement. In this case, intf is an [interface](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry") known at the point of declaration.

An interface reference iref allows a user to use iref->icomp to access all of the visible interface components icomp of the object to which the reference points. Interface components are those components of an object that are declared by implementing the interface in the class.

Apart from declarations, the addition REF TO ... can be used in all ABAP statements in which types can be specified, such as the specification of the [types](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of interface parameters in [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry").

Special Object Reference Variables   

Within a class there are two special references, the [self-reference](javascript:call_link\('abenself_reference_glosry.htm'\) "Glossary Entry") me and the [pseudo reference](javascript:call_link\('abenpseudo_reference_glosry.htm'\) "Glossary Entry") super.

-   The self-reference me is used to address the components of an object explicitly. In the instance methods of a class, me is a predefined local reference variable with the type of the class in which the instance method is implemented that points to its own instance. It can be specified when addressing its own component but does not have to be. It can also be assigned to other reference variables or passed to methods.
-   The pseudo reference super is used to call the hidden method in a redefined instance method in inheritance. The pseudo reference is not a real reference variable because an instance of a subclass cannot have a corresponding superclass instance, and can therefore not have a reference variable. The pseudo reference super is the syntactical expression for a method call in a superclass.

Initializes Object Reference Variables   

Like other variables, object reference variables are also initialized using the statement [CLEAR](javascript:call_link\('abapclear.htm'\)). The initial value of an object reference variable is a reference that does not point to any object.

Assigning Object References Using Upcast   

Object references can be assigned between object reference variables. This means that the references in multiple reference variables can point to the same object (sharing). In assignments between reference variables, the dynamic type of the source variable must be compatible with the static type of the target variable. The dynamic type is the class of the object to which the reference in a reference variable points. The static type is the type (class or interface) with which the reference variable is typed. The static type of the target variable must always be more general than the dynamic type of the source variable.

The syntax check in the program can only compare the static type of the source variable with the static type of the target variable. In assignments using the [assignment operator (\=)](javascript:call_link\('abenequals_operator.htm'\)), this comparison is made, and assignments are only possible if they meet the above requirements for static types (known as [upcasts](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry")). The same applies to passing parameters to procedures. Such assignments are always possible if the static type of the target variable can address only the same number or fewer components as the static type of the source variable or fewer components.

If cref1 and cref2 are class reference variables and iref1 and iref2 are interface reference variables, the following assignments can be checked statically:

-   cref1 = cref2
    
    Both class reference variables must refer to the same class or the class of cref1 is a superclass of the class of cref2. The class of cref1 can therefore always be object because object is the superclass of all classes in ABAP Objects.
    
-   iref1 = iref2
    
    Both interface reference variables must refer to the same interface, or the interface of iref2 must be a nested, with the interface of iref1 as a component.
    
-   iref1 = cref1
    
    The class of the class reference variable cref1 or one of its superclasses must implement the interface of the interface reference variable iref1. The implementation can be performed directly or using a nested interface that contains the interface of iref1 as a component.
    
-   cref1 = iref1
    
    The class of cref1 must be object, that is, the reference variable cref1 must have the type REF TO object.
    

object is a predefined empty class and the root node of the inheritance tree of ABAP Objects. This class has no components and is the generic type of all object reference variables. Reference variables with the type object can be used as containers for passing references. They cannot be used for static [access](javascript:call_link\('abenclass_components_addressing.htm'\)) to objects but dynamic access is possible.

Assigning Object References Using Downcast   

In all cases where a static type check is not possible, and whenever type checks should only take place at program runtime, an explicit downcast is must be performed. The following make this possible:

-   Assignments with the casting operator [?=](javascript:call_link\('abapmove_cast.htm'\)). In this case, the system does not check for static types, but checks at runtime whether the object reference in the source variable points to an object to which the object reference in the target variable may also point. The dynamic type of the source variable is compared with the static type of the target variable. If an assignment is possible, this is performed, otherwise, the catchable exception CX\_SY\_MOVE\_CAST\_ERROR is raised.
-   [Constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") using the casting operator [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)) that can be used in all operand positions. The effect is the same as in an assignment, but can cut down on auxiliary variables.
-   The addition INTO of the statement [WHEN TYPE](javascript:call_link\('abapwhen_type.htm'\)) in a case distinction using [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)). This combines a check for the feasibility of the downcast and the downcast itself.

The syntax requires a downcast to be used in all cases that are not specified above for static type checks.

For non-initial reference variables, the predicate expression [IS INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\)) or the case distinction [CASE TYPE OF](javascript:call_link\('abapcase_type.htm'\)) can be used to check whether a downcast is possible on specific classes or interfaces.

Example

cref1 ?= iref1

Assignment of an interface reference variable to a class reference variable. For the assignment to be successful, the object to which iref1 points must belong to the same class as the type of the class reference variable cref1 or to an appropriate subclass.

Object References as Actual Parameters   

Object references can be passed to [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") (methods, function modules, and subroutines) by specifying object reference variables as actual parameters. In typed formal parameters, it is important to note that only actual parameters of exactly the same type can be passed if the formal parameter can be changed in the procedure. This applies also to EXPORTING and CHANGING parameters of function modules and methods, parameters in subroutines passed by reference, and CHANGING parameters in subroutines passed by value.

Passing actual parameters to formal parameters like in an [upcast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry"), for example, passing a class reference variable to a formal parameter that is typed with reference to an interface of the class or one of its superclasses, is not possible if the parameter can be changed in the procedure.

The reason for this is that a reference could be assigned to the actual parameter in the procedure which is incompatible with its static type, such as a reference to any other class that implements the same interface or a reference to a subclass in another path of the inheritance tree.

Assigning Object References to Field Symbols   

To assign object references to typed field symbols, the same applies as to passing a reference to typed formal parameters: The types must be identical. Otherwise, incompatibilities between dynamic and static types may occur here. For example, it is sufficient to assign two class reference variables of different classes that implement the same interface one after the other to the same field symbol to cause an inconsistent status.


### abenclass_components_addressing.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Objects](javascript:call_link\('abenobject.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Accessing%20Class%20Components%2C%20ABENCLASS_COMPONENTS_ADDRESSING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

ABAP Objects - Accessing Class Components

When accessing class components, there is a difference between access from inside and outside of the same class. In internal access, that is, within a method of the same class, the name of the component is sufficient. In external access, the object, in the case of instance components, and the class, in the case of static components, must be specified using an [object component selector](javascript:call_link\('abenobject_component_select_glosry.htm'\) "Glossary Entry") or [class component selector](javascript:call_link\('abenclass_component_select_glosry.htm'\) "Glossary Entry"). Here, a distinction can be made between static and dynamic variants.

For static access, object reference variables can only be used to access components that are known to the reference variable. These are the components that are available in the static type of the reference variable (class or interface). Class reference variables that are typed with reference to a superclass but point to subclasses know only the superclass components and the interface references know only interface components.

With dynamic access, the dynamic type is used to determine the component for class reference variables. This is the type of the object to which the reference refers, and not the type used for typing the reference. For interface reference variables the static type is also used for dynamic access, that is, the type that was used to type the reference.

This means that in dynamic access, reference variables that are typed with reference to a superclass and that point to subclasses can be used to access any component of the subclass for which dynamic access is possible. In particular, reference variables of the type REF TO OBJECT can be used to access components dynamically. Dynamic access does not allow interface reference variables to be used to access class-specific components and only the corresponding interface components can be accessed. It is not possible to access class-specific components using interface reference variables because the prefix intf~ is always used implicitly when interface reference variables are used.

Static Access   

The following syntax applies (oref is an object reference variable):

-   Access to an instance attribute attr: oref->attr
-   Call of an instance method meth: oref->meth( ... )

In addition to reference variables, the class name can be used to access [static components](javascript:call_link\('abenstatic_component_glosry.htm'\) "Glossary Entry") :

-   Access to a static attribute attr: class=>attr
-   Call of a static method meth: class=>meth( ... )

In this context, it is important to note that the properties of instance attributes behave like static components. Therefore, in a LIKE addition, the class component selector or reference variables can be used to refer to the visible attributes of a class, without first creating an object.

Apart from specifying the name directly, the self-reference me can also be used within a class to access its components:

-   Access to personal attributes attr within the class: me->attr
-   Call of a personal method meth within the same class: me->meth( ... )
    
    The self-reference allows an object to pass a reference to itself to other objects. In addition, attributes within an object which are hidden by the local attributes of the method can be accessed using methods.
    

Within a redefined method of a subclass, the [pseudo reference](javascript:call_link\('abenpseudo_reference_glosry.htm'\) "Glossary Entry") super can be used to access the hidden method in one of the superclasses:

-   Call of an hidden method meth: super->meth( ... )
    
    Within the instance constructor of a subclass, the pseudo reference super must be used to call the instance constructor of the direct superclass:
    
-   Call of the constructor of the direct superclass:
    
    super->constructor( ... )
    

As a special method for accessing attributes, the [attributes for key access](javascript:call_link\('abenclass_attributes_as_key.htm'\)) to internal tables can be used if they contain reference variables.

Dynamic Access   

Dynamic access to class components is possible for attributes (dynamic access) and for [method calls](javascript:call_link\('abapcall_method_dynamic.htm'\)) (dynamic invoke).

Accessing Attributes Dynamically   

Dynamic access to attributes is possible using [dynamic ASSIGN](javascript:call_link\('abapassign_mem_area_dynamic_access.htm'\)) statements on field symbols.

The following variants can be used (oref is an object reference variable):

-   Completely dynamic specification:
    
    ASSIGN (f) TO <fs>.
    
-   Partly dynamic specification for instance attributes:
    
    ASSIGN oref->(f) TO <fs>.
    
-   Partly dynamic specification for static attributes:
    
    ASSIGN (f1)=>(f2) TO <fs>.
    

The content of the fields f, f1 and f2 is interpreted as descriptors of attributes. In a completely dynamic case, f can, for example, have the content 'oref->attr'. In the case of the partly dynamic specification for instance attributes, f only describes the attribute (which itself can in turn describe another attribute). f1 and f2 can be class names and static attributes.

Dynamic Method Calls   

The following syntax applies (oref is an object reference variable):

-   Call of an instance method meth:
    
    CALL METHOD oref->(f)
    
-   Call of a static method meth:
    
    CALL METHOD class=>(f)
    
    CALL METHOD (c)=>meth
    
    CALL METHOD (c)=>(f)
    
-   Call of a method meth within the same class:
    
    CALL METHOD (f)
    
    CALL METHOD me->(f)
    

f and c are fields that contain the name of the method meth or class class.

In the case of a dynamic method call, the actual parameter can be passed dynamically to [specific internal tables](javascript:call_link\('abapcall_method_parameter_tables.htm'\)), similarly to calling function modules.


### abenclass_attributes_as_key.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Objects](javascript:call_link\('abenobject.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Object%20References%20in%20Internal%20Tables%2C%20ABENCLASS_ATTRIBUTES_AS_KEY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

ABAP Objects - Object References in Internal Tables

If the line type of an internal table contains object reference variables as components comp, the attributes attr of the object to which each reference of the line points can be used as key values when reading, sorting, and modifying table lines. This is possible in the following statements or expressions:

-   LOOP AT itab ... WHERE comp->attr ...
-   READ TABLE itab ... WITH *\[*TABLE*\]* KEY comp->attr = ...
-   ... itab *\[* KEY ... comp->attr = ... *\]* ...
-   SORT itab BY comp->attr ...
-   DELETE itab WHERE comp->attr ...
-   MODIFY itab ... TRANSPORTING ... WHERE comp->attr ...

If a table contains unstructured lines with the type of an object reference variable, the attributes of the object to which a line points can be addressed using table\_line->attr.
