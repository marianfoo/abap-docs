  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - managed and unmanaged behavior definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - CDS behavior definition header](javascript:call_link\('abenbdl_bdef_header.htm'\)) → 

CDS BDL - foreign entity

Syntax

...
foreign entity ForeignEntityName;
...

Effect

Defines a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") which, as a component of the current RAP BO, is not part of the [CDS composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") as part of the [response structures](javascript:call_link\('abapeml_response.htm'\)), thus enabling message mapping for other BOs.

A [foreign entity](javascript:call_link\('abenrap_foreign_entity_glosry.htm'\) "Glossary Entry") is defined in the [CDS behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") and is therefore included in the response structures of all BO nodes of the current RAP BO. A foreign entity includes the specified entity in the response structures, not a complete foreign BO. It is possible to specify multiple foreign entities, if required.

A business object [determination](javascript:call_link\('abenbdl_determinations.htm'\)) may trigger an operation of another business object that then returns messages. To receive and adapt the messages from a foreign business object, the foreign business object can be registered in the current BO. The messages are mapped during the [save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry").

A reimplementation of the method map\_messages in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is optional.

Available for business objects of type [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), [unmanaged](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), and [projection](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry").

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Mapping Messages Between Business Objects.

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_FOREIGN\_ENTITY. It establishes a connection to the foreign entity DEMO\_SALES\_CDS\_SO\_1.

managed implementation in class bp\_demo\_rap\_foreign\_entity unique;
strict;
foreign entity DEMO\_SALES\_CDS\_SO\_1;
define behavior for DEMO\_RAP\_FOREIGN\_ENTITY alias RootEntity
persistent table DEMO\_DBTAB\_ROOT
lock master
authorization master (global)
{
  create;
  update;
  delete;
}

The program DEMO\_RAP\_FOREIGN\_ENTITY accesses the BDEF and creates three new entity instances.

Code snippet:

DELETE FROM demo\_dbtab\_root.
    MODIFY ENTITIES OF DEMO\_RAP\_FOREIGN\_ENTITY
         ENTITY RootEntity
           CREATE
             SET FIELDS WITH VALUE #(
              ( %cid = '1' key\_field = 1  )
              ( %cid = '2' key\_field = 2  )
              ( %cid = '3' key\_field = 3  ) )
                MAPPED DATA(mapped)
               FAILED DATA(failed)
               REPORTED DATA(reported).
    COMMIT ENTITIES.

Result: The entities of the referenced foreign business object are added to the reported structure.

![Figure](bdoc_foreign_entity.png)