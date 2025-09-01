---
title: "ABAP SQL - Working with Hierarchies"
description: |
  This example is the basis for the code snippets shown under Working with Hierarchies(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheet_abap_sql_hierarchies.htm). Source Code REPORT demo_sql_hierachies. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: class_constructor, m
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensheet_abap_sql_hiera_abexa.htm"
abapFile: "abensheet_abap_sql_hiera_abexa.htm"
keywords: ["select", "insert", "delete", "loop", "do", "if", "method", "class", "data", "types", "abensheet", "abap", "sql", "hiera", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Cheat Sheets](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_blurb.htm) →  [ABAP SQL: Working with Hierarchies](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheet_abap_sql_hierarchies.htm) → 

ABAP SQL - Working with Hierarchies

This example is the basis for the code snippets shown under [Working with Hierarchies](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheet_abap_sql_hierarchies.htm).

Source Code

REPORT demo\_sql\_hierachies.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF value,
        id     TYPE i,
        amount TYPE p LENGTH 16 DECIMALS 2,
      END OF value.
    CLASS-DATA
      value\_tab TYPE SORTED TABLE OF value WITH UNIQUE KEY id.
    CLASS-DATA
      rnd TYPE REF TO cl\_abap\_random\_int.
    CLASS-METHODS:
      fill\_table,
      get\_root\_id RETURNING VALUE(root\_id) TYPE i.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    fill\_table( ).
    DATA(root\_id) =  get\_root\_id( ) / 10 + 1.
    out->begin\_section( \`SQL Hierarchies in ABAP SQL\`
      )->begin\_section( \`CDS Artefacts\`
      )->begin\_section( \`CDS Source\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_ddls\_source\_code\_html(
                      source = 'DEMO\_CDS\_SIMPLE\_TREE\_VIEW' )
      )->next\_section( \`CDS Hierarchy\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_ddls\_source\_code\_html(
                      source = 'DEMO\_CDS\_SIMPLE\_TREE' )
      )->end\_section( )->end\_section(
      )->begin\_section( \`Hierarchies as Data Source in the FROM clause\`
      )->begin\_section( \`Using a CDS Hierarchy\`
      )->begin\_code( \`cds\` ).
    SELECT FROM demo\_cds\_simple\_tree( p\_id = @root\_id ) "hierarchy
           FIELDS id,
                  parent,
                  name,
                  hierarchy\_rank,
                  hierarchy\_tree\_size,
                  hierarchy\_parent\_rank,
                  hierarchy\_level,
                  hierarchy\_is\_cycle,
                  hierarchy\_is\_orphan,
                  node\_id,
                  parent\_id
           INTO TABLE @DATA(cds\_result). "#EC CI\_NOWHERE
    out->end\_code( \`cds\`
       )->write( cds\_result ).
    IF lines( cds\_result ) < 10 OR lines( cds\_result ) > 20.
      SUBMIT (sy-repid).
    ENDIF.
    out->next\_section( \`Using the Hierarchy Generator\`
      )->begin\_section( \`Source CDS View\`
      )->begin\_code( \`asql\_cds\` ).
    SELECT FROM HIERARCHY( SOURCE demo\_cds\_simple\_tree\_view
                           CHILD TO PARENT ASSOCIATION \_tree
                           START WHERE id = @root\_id
                           SIBLINGS ORDER BY id
                           MULTIPLE PARENTS NOT ALLOWED ) "hierarchy
           FIELDS id,
                  parent,
                  name,
                  hierarchy\_rank,
                  hierarchy\_tree\_size,
                  hierarchy\_parent\_rank,
                  hierarchy\_level,
                  hierarchy\_is\_cycle,
                  hierarchy\_is\_orphan,
                  node\_id,
                  parent\_id
           INTO TABLE @DATA(asql\_cds\_result).
    ASSERT asql\_cds\_result = cds\_result.
    out->end\_code( \`asql\_cds\`
      )->next\_section( \`Source CTE\`
      )->begin\_code( \`asql\_cte\` ).
    WITH
      +cte\_simple\_tree\_source AS
         ( SELECT FROM demo\_simple\_tree
                  FIELDS id,
                         parent\_id AS parent,
                         name )
            WITH ASSOCIATIONS (
              JOIN TO MANY +cte\_simple\_tree\_source AS \_tree
                ON +cte\_simple\_tree\_source~parent = \_tree~id )
      SELECT FROM HIERARCHY( SOURCE +cte\_simple\_tree\_source
                             CHILD TO PARENT ASSOCIATION \_tree
                             START WHERE id = @root\_id
                             SIBLINGS ORDER BY id
                             MULTIPLE PARENTS NOT ALLOWED ) "hierarchy
             FIELDS id,
                    parent,
                    name,
                    hierarchy\_rank,
                    hierarchy\_tree\_size,
                    hierarchy\_parent\_rank,
                    hierarchy\_level,
                    hierarchy\_is\_cycle,
                    hierarchy\_is\_orphan,
                    node\_id,
                    parent\_id
             INTO TABLE @DATA(asql\_cte\_result).
    ASSERT asql\_cte\_result = cds\_result.
    out->end\_code( \`asql\_cte\`
      )->end\_section(
      )->next\_section( \`Using a CTE Hierarchy\`
      )->begin\_section( \`Source CDS Hierarchy\`
      )->begin\_code( \`cte\_cds\` ).
    WITH
      +tree AS
        ( SELECT FROM demo\_cds\_simple\_tree( p\_id = @root\_id )
                 FIELDS \* )
          WITH HIERARCHY demo\_cds\_simple\_tree
      SELECT FROM  +tree "hierarchy
             FIELDS id,
                    parent,
                    name,
                    hierarchy\_rank,
                    hierarchy\_tree\_size,
                    hierarchy\_parent\_rank,
                    hierarchy\_level,
                    hierarchy\_is\_cycle,
                    hierarchy\_is\_orphan,
                    node\_id,
                    parent\_id
             INTO TABLE @DATA(cte\_cds\_result).
    ASSERT cte\_cds\_result  = cds\_result.
    out->end\_code( \`cte\_cds\`
      )->next\_section( \`Source Hierarchy Generator\`
      )->begin\_code( \`cte\_asql\`  ).
    WITH
      +tree AS
        ( SELECT FROM HIERARCHY(
            SOURCE demo\_cds\_simple\_tree\_view
            CHILD TO PARENT ASSOCIATION \_tree
            START WHERE id = @root\_id
            SIBLINGS ORDER BY id
            MULTIPLE PARENTS NOT ALLOWED ) AS asql\_hierarchy
            FIELDS id,
                   parent,
                   name )
          WITH HIERARCHY asql\_hierarchy
      SELECT FROM +tree "hierarchy
             FIELDS id,
                    parent,
                    name,
                    hierarchy\_rank,
                    hierarchy\_tree\_size,
                    hierarchy\_parent\_rank,
                    hierarchy\_level,
                    hierarchy\_is\_cycle,
                    hierarchy\_is\_orphan,
                    node\_id,
                    parent\_id
             INTO TABLE @DATA(cte\_asql\_result).
    ASSERT cte\_asql\_result = cds\_result.
    out->end\_code( \`cte\_asql\`
      )->next\_section( \`Source CTE\`
      )->begin\_code( \`cte\_cte\` ).
    WITH
      +cte\_simple\_tree\_source AS
        ( SELECT FROM demo\_simple\_tree
                 FIELDS id,
                        parent\_id AS parent,
                        name )
           WITH ASSOCIATIONS (
             JOIN TO MANY +cte\_simple\_tree\_source AS \_tree
               ON +cte\_simple\_tree\_source~parent = \_tree~id ),
      +tree AS
        ( SELECT FROM HIERARCHY(
            SOURCE +cte\_simple\_tree\_source
            CHILD TO PARENT ASSOCIATION \_tree
            START WHERE id = @root\_id
            SIBLINGS ORDER BY id
            MULTIPLE PARENTS NOT ALLOWED ) AS cte\_hierarchy
            FIELDS id,
                   parent,
                   name  )
            WITH HIERARCHY cte\_hierarchy
      SELECT FROM +tree "hierarchy
             FIELDS id,
                    parent,
                    name,
                    hierarchy\_rank,
                    hierarchy\_tree\_size,
                    hierarchy\_parent\_rank,
                    hierarchy\_level,
                    hierarchy\_is\_cycle,
                    hierarchy\_is\_orphan,
                    node\_id,
                    parent\_id
             INTO TABLE @DATA(cte\_cte\_result).
    ASSERT cte\_cte\_result = cds\_result.
    out->end\_code( \`cte\_cte\`
      )->end\_section(
      )->end\_section(
      )->next\_section( \`Hierarchy Navigators\`
      )->begin\_section( \`HIERARCHY\_DESCENDANTS\` ).
    "Get the ID of the second longest subtree
    SELECT FROM demo\_cds\_simple\_tree( p\_id = @root\_id ) AS h
           FIELDS id
           ORDER BY hierarchy\_tree\_size DESCENDING
           INTO TABLE @DATA(sub\_ids)
           UP TO 1 ROWS OFFSET 1.
    DATA(sub\_id) = sub\_ids\[ 1 \]-id.
    out->begin\_code( \`descendants\` ).
    SELECT FROM HIERARCHY\_DESCENDANTS(
                  SOURCE demo\_cds\_simple\_tree( p\_id = @root\_id )
                  START WHERE id = @sub\_id  )
      FIELDS id,
             parent\_id,
             name,
             hierarchy\_distance
      INTO TABLE @DATA(descendants).
    out->end\_code( \`descendants\`
      )->write( descendants
      )->next\_section( \`HIERARCHY\_ANCESTORS\` ).
    "Get the ID of the longest path
    SELECT SINGLE FROM demo\_cds\_simple\_tree( p\_id = @root\_id )
           FIELDS id
           WHERE hierarchy\_level = (
             SELECT FROM demo\_cds\_simple\_tree( p\_id = @root\_id )
                    FIELDS MAX( hierarchy\_level ) AS max\_level )
           INTO (@DATA(max\_id)). "#EC CI\_NOWHERE
    out->begin\_code( \`ancestors\` ).
    SELECT FROM HIERARCHY\_ANCESTORS(
                  SOURCE demo\_cds\_simple\_tree( p\_id = @root\_id )
                  START WHERE id = @max\_id )
      FIELDS id,
              parent\_id,
              name,
              hierarchy\_distance
      INTO TABLE @DATA(ancestors).
    out->end\_code( \`ancestors\`
      )->write( ancestors
      )->next\_section( \`HIERARCHY\_SIBLINGS\` ).
    "Get the ID of a node with the most siblings
    SELECT FROM demo\_cds\_simple\_tree( p\_id = @root\_id )
           FIELDS hierarchy\_parent\_rank AS rank,
                  COUNT( hierarchy\_parent\_rank ) AS rank\_count
           GROUP BY hierarchy\_parent\_rank
           ORDER BY rank\_count DESCENDING
           INTO TABLE @DATA(rank\_counts)
           UP TO 1 ROWS.
    DATA(sibl\_id) =
      cds\_result\[ hierarchy\_parent\_rank = rank\_counts\[ 1 \]-rank \]-id.
    out->begin\_code( \`siblings\` ).
    SELECT FROM HIERARCHY\_SIBLINGS(
                  SOURCE demo\_cds\_simple\_tree( p\_id = @root\_id )
                  START WHERE id = @sibl\_id )
      FIELDS id,
              parent\_id,
              name,
              hierarchy\_sibling\_distance
      INTO TABLE @DATA(siblings).
    out->end\_code( \`siblings\`
      )->write( siblings
      )->next\_section( \`HIERARCHY\_DESCENDANTS\_AGGREGATE\`
      )->begin\_code( \`descendants\_aggregate\` ).
    SELECT FROM HIERARCHY\_DESCENDANTS\_AGGREGATE(
                  SOURCE demo\_cds\_simple\_tree( p\_id = @sub\_id  ) AS h
                  JOIN @value\_tab AS v
                    ON  v~id = h~id
                  MEASURES SUM( v~amount ) AS amount\_sum
                  WHERE hierarchy\_rank > 1
                  WITH SUBTOTAL
                  WITH BALANCE )
      FIELDS id,
             amount\_sum,
             hierarchy\_rank,
             hierarchy\_aggregate\_type
      INTO TABLE @DATA(descendants\_aggregate).
    out->end\_code( \`descendants\_aggregate\`
      )->write( descendants\_aggregate ).
    SELECT FROM HIERARCHY\_DESCENDANTS(
                  SOURCE demo\_cds\_simple\_tree( p\_id = @sub\_id  )
                  START WHERE id = @sub\_id  ) AS h
                  LEFT OUTER JOIN @value\_tab AS v
                     ON  v~id = h~id
           FIELDS  h~id,
                   h~parent\_id,
                   v~amount,
                   hierarchy\_rank
    INTO TABLE @DATA(join).
    out->write( join ).
    ASSERT
      descendants\_aggregate\[ hierarchy\_aggregate\_type  = 1 \]-amount\_sum
        = REDUCE value-amount(
            INIT s TYPE decfloat34
            FOR <v> IN join WHERE ( hierarchy\_rank > 1 )
             NEXT s += <v>-amount ).
    ASSERT
      descendants\_aggregate\[ hierarchy\_aggregate\_type  = 2 \]-amount\_sum
        = join\[ hierarchy\_rank = 1 \]-amount.
    DELETE FROM demo\_simple\_tree. "GTT must be deleted
    out->display( ).  ENDMETHOD.
  METHOD fill\_table.
    DATA tree\_tab TYPE TABLE OF demo\_simple\_tree WITH EMPTY KEY.
    tree\_tab = VALUE #(
        ( id = 1  parent\_id = 0 name = '1'  )
        ( id = 2  parent\_id = 0 name = '2'  )
        ( id = 3  parent\_id = 0 name = '3'  )
        ( id = 4  parent\_id = 0 name = '4'  )
        ( id = 5  parent\_id = 0 name = '5'  )
        ( id = 6  parent\_id = 0 name = '6'  )
        ( id = 7  parent\_id = 0 name = '7'  )
        ( id = 8  parent\_id = 0 name = '8'  )
        ( id = 9  parent\_id = 0 name = '9'  )
        ( id = 10 parent\_id = 0 name = '10' ) ).
    DATA(id) = 10.
    DO.
      DATA(parent\_id) = rnd->get\_next( ).
      IF line\_exists( tree\_tab\[ id = parent\_id \] ).
        id += 1.
        tree\_tab = VALUE #( BASE tree\_tab (
          id        =  id
          parent\_id = parent\_id
          name      = tree\_tab\[ id = parent\_id \]-name && \`-\` && id ) ).
      ENDIF.
      IF id > 1000.
        EXIT.
      ENDIF.
    ENDDO.
    DELETE FROM demo\_simple\_tree.
    INSERT demo\_simple\_tree FROM TABLE @tree\_tab.
    DATA value\_rnd TYPE REF TO cl\_abap\_random\_int.
    value\_rnd = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                            min  = 1
                                            max  = 100 ).
    LOOP AT tree\_tab ASSIGNING FIELD-SYMBOL(<node>).
      value\_tab = VALUE #( BASE value\_tab (
        id = <node>-id
        amount =
          value\_rnd->get\_next( ) / value\_rnd->get\_next( ) \* 100 ) ).
    ENDLOOP.
  ENDMETHOD.
  METHOD get\_root\_id.
    DO.
      root\_id = rnd->get\_next( ).
      SELECT SINGLE 'X'
             FROM demo\_simple\_tree
             WHERE id = @root\_id
             INTO @DATA(id\_exists).
      IF sy-subrc = 0.
        EXIT.
      ENDIF.
    ENDDO.
  ENDMETHOD.
  METHOD class\_constructor.
    rnd = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                      min  = 1
                                      max  = 1000 ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example is explained in detail under [Working with Hierarchies](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsheet_abap_sql_hierarchies.htm). Besides the code snippets shown there it contains the generation of example data and the determination of some start values that lead to meaningful results.