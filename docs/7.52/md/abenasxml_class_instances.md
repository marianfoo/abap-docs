---
title: "Namespace"
description: |
  Where Defined classes/global Class Library classes/program/PRG Program prg classes/class-pool/CPOOL Class Pool cpool classes/function-pool/FPOOL Function group fpool The serializable values of an instance of a class (instance attributes or output parameters of a special helper method) are displayed
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_class_instances.htm"
abapFile: "abenasxml_class_instances.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abenasxml", "instances"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [asXML - Canonical XML Representation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml.htm) →  [asXML - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_named.htm) →  [asXML - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_references.htm) → 

asXML - Instances of Classes

To transform classes to [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") using the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation.htm), or to create classes from XML data, their classes must implement the interface IF\_SERIALIZABLE\_OBJECT. The instance of a class (object) is represented as a subelement of [heap](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_general.htm) as follows:

  <asx:heap xmlns:nspace ...>
    <class id = "key">
      <part classVersion = "...">
        <name>...</name>
        ...
      </part>
      ...
    </class>
  </asx:heap>

The class element name is the XML schema type name of the class of the object (or the dynamic type of the reference variables) from the nspace namespace (see table below) in uppercase letters. The mandatory attribute id contains the unique key key of the element. This key is used by the representation of the associated reference variables in values to reference the attribute. Subelements <part>...</part> contain the values of the instance attributes of individual object parts as subelements <name>...</name>. The individual object parts are defined by means of the serializable classes of the current inheritance hierarchy.

The namespace of the class name indicates where the class is defined. The table below shows the possible namespaces. In the first column here, classes stands for http://www.sap.com/abapxml/classes. For identifiers PRG, CPOOL, and FPOOL, the same substitution rule applies as that for the namespaces for [anonymous data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_anonymous_data_object.htm).

Namespace

Where Defined

classes/global

Class Library

classes/program/PRG

Program prg

classes/class-pool/CPOOL

Class Pool cpool

classes/function-pool/FPOOL

Function group fpool

The serializable values of an instance of a class (instance attributes or output parameters of a special helper method) are displayed in the asXML representation for named data objects or for reference variables as the content or attributes of <name>...</name>. Here, name is the name of an instance attribute or output parameter in uppercase letters. For interface attributes, the name of the interface is added before the name, separated by a point (.), to distinguish it from a class attribute of the same name. For the identifiers, the same [substitution rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_named.htm) apply as for all elements.

The serializable values of an instance of a class are specified in the class by implementing the system interface IF\_SERIALIZABLE\_OBJECT. The system interface IF\_SERIALIZABLE\_OBJECT is a [tag interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentag_interface_glosry.htm "Glossary Entry"). Its implementation shows the runtime environment the serializability of a class and its subclasses and allows it to declare certain other components in the class according to fixed syntax rules. This interface IF\_SERIALIZABLE\_OBJECT can only be implemented in one class of a path and is effective for all subclasses from this class.

If the class or one of its superclasses does not implement the interface IF\_SERIALIZABLE\_OBJECT, the element class does not contain any subelements. By default, all instance attributes of a class in which the interface IF\_SERIALIZABLE\_OBJECT is implemented directly or in a superclass are serialized and deserialized to this class. This behavior can be changed by declaring special help methods. [Static attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_attribute_glosry.htm "Glossary Entry") are ignored in serializations or deserializations (with the exception of special constant SERIALIZABLE\_CLASS\_VERSION).

-   [Standard Behavior](#abenasxml-class-instances-1--------adjusted-behavior---@ITOC@@ABENASXML_CLASS_INSTANCES_2)

Standard Behavior

If the class or one of its superclasses implements the interface IF\_SERIALIZABLE\_OBJECT, the element <class>...</class> contains at least one subelement <part>...</part></class>. These subelements correspond to individual serializable object parts and contain the representations of the instance attributes of the respective object part in asXML format. An object part is specified by the class in which instance attributes are declared or into which an interface that contains instance attributes is integrated. A serializable class contains an object part for itself as well as object parts for all superclasses in the current path of the inheritance tree up to and including the class that implements the interface IF\_SERIALIZABLE\_OBJECT. Name part is the name of the respective class. If the class is a local class, prefix local is added in front of the name, separated by a point (.), to distinguish it from a global class of the same name. Object parts of superclasses in which the interface IF\_SERIALIZABLE\_OBJECT is not implemented are not serializable and do not have a corresponding subelement part. This means that a class in which the interface IF\_SERIALIZABLE\_OBJECT is not implemented (neither in the class itself nor in a superclass) creates an empty XML element class in serializations.

In serializations, the XML elements part of the object parts of the superclasses that implemented the interface IF\_SERIALIZABLE\_OBJECT are created for the subclasses and by default the XML elements of the instance attributes are created in the order in which they are declared in the class.

In deserializations, an object of the respective class is created. Here, the instance constructor is not executed. After the object is created, all instance attributes have their [initial value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninitial_value_glosry.htm "Glossary Entry") or the [start value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstart_value_glosry.htm "Glossary Entry") that is specified using the addition VALUE of the statement DATA. By default, the instance attributes are supplied with the values of the corresponding XML elements. Here the order of the object parts and the attributes is not important. Instance attributes without a corresponding XML element retain their value. Unnecessary XML elements are ignored as long as they do not belong to a namespace; otherwise they raise an exception that can be handled. In the deserialization of an element that does not have any subelements part, no object is created but instead the target reference variable is initialized.

If a class or one of its superclasses implements the interface IF\_SERIALIZABLE\_OBJECT, the [private](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprivate_glosry.htm "Glossary Entry") constant SERIALIZABLE\_CLASS\_VERSION of type i can be declared in each object part, that is, in each participating class of the inheritance tree. In serializations, the value of the constant is assigned to attribute classVersion of XML element part. In deserializations, the attribute value is currently not evaluated but is intended for possible future enhancements.

Note

Using the standard behavior involves a certain security risk, because all instance attributes of an object can be serialized and can be manipulated in the XML data that is created (see [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenserializable_object_abexa.htm)).

Adjusted Behavior

By default, all instance attributes of an object part are serialized regardless of their visibility and the version of the class is checked. To change this behavior, for each object part, instance methods SERIALIZE\_HELPER and DESERIALIZE\_HELPER can be declared and implemented in the respective class. These methods can only be declared as private instance methods in classes that implement the interface IF\_SERIALIZABLE\_OBJECT directly or in one of its superclasses. The declaration of one of the methods restricts the declaration of the others, and the interface is predefined by the syntax check as described below:

-   Method SERIALIZE\_HELPER is only allowed to have output parameters, and method DESERIALIZE\_HELPER is only allowed to have input parameters with generic [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_glosry.htm "Glossary Entry").

-   For each output parameter of method SERIALIZE\_HELPER, there must be an input parameter of method DESERIALIZE\_HELPER that has the same name and the same typing. Additional input parameters of method DESERIALIZE\_HELPER have to be optional.

-   Method SERIALIZE\_HELPER is not allowed to have any output parameters of name SERIALIZABLE\_CLASS\_VERSION, and method DESERIALIZE\_HELPER is allowed to have this optional input parameter of type i. This parameter is currently not used but is intended for possible future enhancements.

If methods SERIALIZE\_HELPER and DESERIALIZE\_HELPER are declared in an object part, the instance attributes of the object part are not serialized and deserialized. Instead, in serializations, method SERIALIZE\_HELPER is executed and the values of all output parameters are written to the corresponding element part as subelements in the order specified in asXML format. The name of a subelement is the name of the corresponding output parameter in uppercase letters. In deserializations, the method DESERIALIZE\_HELPER is called, where the values of the subelements of the corresponding element part are passed to the input parameters of the methods that have the same name. The order does not matter here and unnecessary XML elements are ignored.

Executable Example

[Modified Serialization and Deserialization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenserializable_object_abexa.htm)

Continue
![Example](exa.gif "Example") [Modified Serialization and Deserialization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenserializable_object_abexa.htm)