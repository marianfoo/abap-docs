  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) → 

Inheritance

The concept of inheritance makes it possible to derive new classes from existing classes. This is done using the addition [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) of the statement [CLASS ... DEFINITION](javascript:call_link\('abapclass_definition.htm'\)). The new class adopts or inherits all components of the existing class. The new class is called a subclass and the existing class is called a superclass.

If no further declarations are made, a subclass contains exactly the components of the superclass. However, only the components of the public, protected, and package [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry")s of the superclass are visible in the subclass. Although the private components of the superclass are also contained in the subclass, they are not visible. In a subclass, private components with the same name as the corresponding components of the superclass can be declared. Each class works with its private components. As long as a method inherited from the superclass is not redefined, it uses the private attributes of the superclass and not the possible subclass attributes of the same name.

If the superclass does not have a private visibility section, the subclass is an exact copy of the superclass. It is possible, however, to add further components to the subclass. These components are used to specialize the subclass with respect to the superclass. If a subclass is itself used as the superclass for a new class, it can be specialized further.

Each class can have multiple direct subclasses, but only one direct superclass. ABAP Objects applies the principle of [single inheritance](javascript:call_link\('abensingle_inheritance_glosry.htm'\) "Glossary Entry"). If subclasses inherit from superclasses that are themselves subclasses, all classes involved represent an inheritance tree whose specialization increases each time a hierarchy level is added. Specialization decreases the closer a level is located to the root node of the inheritance tree. The root node of all inheritance trees in ABAP Objects is the predefined empty class object. This class is the most generic class because it does not contain attributes or methods. When a new class is defined, it must not be specified explicitly as a superclass because it always exists implicitly. In the inheritance tree, two neighboring nodes are known as the direct superclass and subclass, while all preceding and succeeding nodes are collectively referred to as superclasses and subclasses. The declaration of the components of a subclass is distributed among all superclasses of the inheritance tree.

Programming Guideline

[Avoid using deep inheritance hierarchies](javascript:call_link\('abeninheritance_guidl.htm'\) "Guideline")

Executable Example

[Inheritance](javascript:call_link\('abeninheritance_abexa.htm'\))

Continue
[Redefining Methods](javascript:call_link\('abeninheritance_redefinition.htm'\))
[Abstract and Final Methods and Classes](javascript:call_link\('abeninheritance_abstract_final.htm'\))
[Inheritance and Polymorphism](javascript:call_link\('abeninheritance_references.htm'\))
[Inheritance and Interfaces](javascript:call_link\('abeninheritance_interfaces.htm'\))
[Inheritance and Visibility](javascript:call_link\('abeninheritance_visibility.htm'\))
[Inheritance and the Component Namespace](javascript:call_link\('abeninheritance_name_space.htm'\))
[Inheritance and Static Components](javascript:call_link\('abeninheritance_statical.htm'\))
[Inheritance and Constructors](javascript:call_link\('abeninheritance_constructors.htm'\))
[Inheritance and Instantiation](javascript:call_link\('abeninheritance_instantiation.htm'\))
[Inheritance and Events](javascript:call_link\('abeninheritance_events.htm'\))