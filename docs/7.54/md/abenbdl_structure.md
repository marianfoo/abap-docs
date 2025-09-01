  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_definitions.htm) →  [ABAP BDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_bdl.htm) →  [ABAP BDL - Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_syntax.htm) → 

ABAP BDL - Structure

A behavior definition consists of a header part and a sequence of entity behavior definitions. An entity behavior definition consists of a section containing properties of the entity plus operations enclosed in curly brackets {}.

The following depicts the syntax structure of a behavior definition that itself defines the transactional behavior of CDS\_Entity\_name.

/\* Header part of the behavior definition \*/
implementation unmanaged *|* managed *|* abstract
       *\[*in class class\_name unique*\]*;

/\* Entity behavior definition \*/
define behavior for CDS\_Entity\_name *\[*alias AliasName*\]*

/\* Entity properties \*/
*\[*implementation in class ClassName unique*\]*
*\[*late numbering *\[*in place*\]**\]*
*\[*etag field *|* AncestorEntity~Field ( LocalField = MasterField )*\]*
*\[*lock master *|* dependent ( LocalField = MasterField )*\]*

/\* Curly bracket \*/
{

/\* Access restrictions \*/
field (read only | mandatory) field*\[*, field, ...*\]*;

/\* Standard Operations\*/
*\[*internal*\]* create;
*\[*internal*\]* update;
*\[*internal*\]* delete;

/\* Actions \*/
*\[*internal*\]* *\[*static*\]* action ActionName
       *\[*external LongName*\]*
       *\[*parameter InputParameterEntity|$self*\]*
       *\[*result cardinality OutputParameterEntity|$self*\]*;

/\* Association \*/
*\[*internal*\]* association AssociationName
       *\[*abbreviation AbbreviationName*\]* {*\[**\[*internal;*\]*create;*\]*};

/\* Curly bracket \*/
}

Rules

-   Not every entity property ([late numbering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_late_numbering.htm), [etag](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_etag.htm), or [lock](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_lock.htm)) from the [composition tree](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomposition_tree_glosry.htm "Glossary Entry") is a mandatory property.

-   A property can occur a maximum of once in a behavior definition.

-   If an entity does not occur in the behavior definition, the entity does not have a transactional character (it is read-only).