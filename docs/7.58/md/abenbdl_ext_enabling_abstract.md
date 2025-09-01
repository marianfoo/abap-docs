  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extension.htm) →  [RAP - BDEF Extension, Extensibility Enabling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_enabling.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Extensibility%20Enabling%20for%20Abstract%20BDEFs%2C%20ABENBDL_EXT_ENABLING_ABSTRACT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

RAP - Extensibility Enabling for Abstract BDEFs

Syntax

[abstract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_impl_type.htm)
[strict*\[*(version)*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_strict.htm);
[extensible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensible.htm);
[define behavior for AbstractEntity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh_abstract.htm)
  [extensible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensible.htm)
  *\[*...*\]*
{
  *\[*...*\]*
  *\[*[*\[*deep*\]* mapping for PartnerType corresponding extensible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_type_mapping_abstract.htm)*\]*
  *\[*...*\]*
}
...

Prerequisite

To allow [abstract BDEF extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_abs_bdef_ext_glosry.htm "Glossary Entry") to an [abstract behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry"), [BDEF strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry") must be switched on using the keyword [strict *\[*(version)*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_strict.htm).

Effect

The keyword extensible can be specified at different places to allow for extensions:

-   extensible in the [abstract BDEF header](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_bdef_abstract_header.htm)
    
    Prerequisite for extensibility. If it is not specified, then extensions are not allowed. If specified, at least one entity must be declared as extensible after the statement [define behavior for AbstractEntity ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh_abstract.htm)
    
    Allows the following components to be added to an abstract behavior definition via an abstract BDEF extension:
    
    -   Adding new nodes to the hierarchical type of the abstract BDEF using the statement define behavior for AbstractEntity.
    -   Adding new scalar entities to the hierarchical type.
-   extensible specified for an individual node after the statement define behavior for AbstractEntity
    
    Mandatory for each individual node that allows extensions.
    
    Allows the following extensions to be added via an abstract BDEF extension:
    
    -   [RAP field characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_field_char_glosry.htm "Glossary Entry") can be added to extension fields.
    -   Associations
    -   [Type mapping](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_type_mapping_glosry.htm "Glossary Entry")
-   extensible in the [entity behavior body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_body_glosry.htm "Glossary Entry"):
    
    [*\[*deep*\]* mapping for PartnerType corresponding extensible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_type_mapping.htm): a [RAP type mapping](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_type_mapping_glosry.htm "Glossary Entry") defined in the original abstract BDEF can be extended with extension fields. extensible can only be used in combination with corresponding, so that components with the same name are automatically mapped to each other.
    

Note: It is not required that the underlying [CDS abstract entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") is declared as extensible.

Example

The abstract behavior definition for DEMO\_RAP\_ABSTRACT\_ROOT enables BDEF extensions:

abstract;
strict ( 2 );
extensible;
with hierarchy;
define behavior for DEMO\_RAP\_ABSTRACT\_ROOT
extensible
with control
{
// key field, unwanted in derived types
  field ( suppress ) comp1key;
  association \_item;
  association \_sib;
  deep mapping for demo\_rap\_struc\_x corresponding extensible
    {
          comp2 = comp2;
    }
}
define behavior for DEMO\_RAP\_ABSTRACT\_1
extensible
with control
{
// foreign key field for parent, unwanted in derived types
  field ( suppress ) comp1, comp2;
}