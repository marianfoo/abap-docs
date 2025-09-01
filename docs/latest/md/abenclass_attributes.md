  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Objects](javascript:call_link\('abenabap_objects.htm'\)) →  [ABAP Objects - Classes](javascript:call_link\('abenclasses.htm'\)) →  [ABAP Objects - Components of Classes](javascript:call_link\('abenclass_components.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Objects%20-%20Attributes%20of%20Classes%2C%20ABENCLASS_ATTRIBUTES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Objects - Attributes of Classes

Attributes are internal data objects of a class of any ABAP data type. The content of the attributes determines the state of the object. Reference variables can also be defined, which can then be used to create and address objects. This allows objects to be accessed within classes.

Attributes are defined in the declaration part of a class. Public attributes are visible from outside the class without restrictions and as such are part of the interface between objects and their users. To encapsulate the state of the object, protected, package-visible, or private attributes must be used. In addition to the visibility, the modifiability of non-private attributes can also be restricted using the addition [READ-ONLY](javascript:call_link\('abapdata_options.htm'\)) in the declaration.

-   [Instance Attributes](#@@ITOC@@ABENCLASS_ATTRIBUTES_1)
-   [Static Attributes](#@@ITOC@@ABENCLASS_ATTRIBUTES_2)
-   [Data Types of Attributes](#@@ITOC@@ABENCLASS_ATTRIBUTES_3)
-   [Boxed Components](#@@ITOC@@ABENCLASS_ATTRIBUTES_4)

Instance Attributes   

The content of instance attributes represents the instance-dependent state of the object. Instance attributes are declared using the [DATA](javascript:call_link\('abapdata.htm'\)) statement. The addition [COMMON PART](javascript:call_link\('abapdata_common.htm'\)) cannot be used in classes.

Hints

-   The attempt to access an instance attribute via an initial [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry"), in contrast to the call of an instance method, results in an exception that is not catchable.
-   The data types of all class attributes belong to the static properties of a class. A LIKE addition enables the visible class attributes to be referenced using the class component selector or reference variables without first creating an object.

Example

Referring to an instance attribute behind LIKE with the object component selector without creating an instance of the class of the attribute.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    DATA attr TYPE i.
ENDCLASS.
CLASS user DEFINITION.
  PUBLIC SECTION.
    METHODS meth.
ENDCLASS.
CLASS user IMPLEMENTATION.
  METHOD meth.
    DATA oref TYPE REF TO cls.
    TYPES typ LIKE oref->attr.
  ENDMETHOD.
ENDCLASS.

Static Attributes   

The content of static attributes represents the instance-independent state of the class that is valid for all instances. Static attributes exist once for each class. They are declared using the statement [CLASS-DATA](javascript:call_link\('abapclass-data.htm'\)) and are preserved for the entire runtime. All the objects of a class can access its static attributes. Changes to a static attribute in an object are visible to all other objects of that class.

Data Types of Attributes   

The data types of all attributes, including instance attributes and, in particular, [bound data types](javascript:call_link\('abenbound_data_type_glosry.htm'\) "Glossary Entry"), belong to the static properties of a class. Therefore, in a LIKE addition, the class component selector or reference variables can be used to refer to the visible attributes of a class, without first creating an object. In this way, the public static properties of global classes can be accessed in every program.

Example

Reference to the data type of an instance attribute attr of a global class cl\_global.

DATA dref TYPE REF TO cl\_global.
DATA:  f1 LIKE cl\_global=>attr,
       f2 LIKE dref->attr.

Boxed Components   

Like substructures of nested structures, attributes declared as structures can be declared as [static boxes](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry") using the addition [BOXED](javascript:call_link\('abapdata_boxed.htm'\)). In static boxes, [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry") takes effect, which leads to fewer memory requirements for little used structures of frequently used objects. A static box used as a [boxed component](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry") is a deep component that is managed using an internal reference, such as strings and internal tables.