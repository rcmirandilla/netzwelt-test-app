import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapse,
  Heading,
  HStack,
  IconButton,
  VStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useLoaderData } from "react-router-dom";

function Territories({ root }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <HStack spacing={4}>
        {root.children.length && (
          <IconButton size="sm" icon={<ChevronDownIcon />} onClick={onToggle} />
        )}
        <Text>{root.data.name}</Text>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <VStack pl={14} alignItems="flex-start">
          {root.children.map((child, i) => (
            <Territories key={i} root={child} />
          ))}
        </VStack>
      </Collapse>
    </>
  );
}

export default function GetAllTerritories() {
  const { data } = useLoaderData();

  function generateTree(graph, start, tree = {}, visited = {}) {
    visited[start.id] = true;

    const children = graph.filter((e) => e.parent === start.id);
    tree.children = children.map((e) => ({ data: e, children: [] }));
    tree.data = start;

    tree.children.map((child) => {
      if (!visited[child.data.id]) {
        generateTree(graph, child.data, child, visited);
      }
      return null;
    });

    return tree;
  }

  const roots = data.filter((e) => e.parent === null);

  const rootTerritories = roots.map((root) => generateTree(data, root));

  return (
    <Card variant="outline" p={4} w="640px">
      <CardHeader>
        <Heading size="lg">Territories</Heading>
      </CardHeader>
      <CardBody>
        <VStack alignItems="flex-start">
          {rootTerritories.map((rootTerritory, i) => (
            <Territories key={i} root={rootTerritory} />
          ))}
        </VStack>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
